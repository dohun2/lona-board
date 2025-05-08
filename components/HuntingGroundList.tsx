"use client";
import { useEffect, useState } from "react";
import {
  getMessaging,
  onMessage,
  getToken,
  isSupported,
} from "firebase/messaging";
import { firebaseApp } from "../app/firebase";
import { HUNTING_GROUNDS } from "@/app/constant";

const messaging = async () => {
  try {
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      return getMessaging(firebaseApp);
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const HuntingGroundList = () => {
  const [, setToken] = useState<string | null>(null);

  const requestPermission = async () => {
    const messagingResolve = await messaging();
    if (!("Notification" in window)) {
      console.warn("This browser does not support notifications.");
      return;
    }
    if (messagingResolve) {
      const token = await getToken(messagingResolve);
      setToken(token);
    }
  };

  useEffect(() => {
    requestPermission();
    const onMessageListener = async () => {
      const messagingResolve = await messaging();
      if (messagingResolve) {
        onMessage(messagingResolve, (payload) => {
          if (!("Notification" in window)) {
            return;
          }
          const permission = Notification.permission;
          const title = payload.notification?.title || "로드나인 알림";
          const redirectUrl = "/";
          const body = payload.notification?.body || " ";
          if (permission === "granted") {
            if (payload.data) {
              console.log(title, body);
              const notification = new Notification(title, {
                body,
                icon: "/icon-192x192.png",
              });
              notification.onclick = () => {
                window.open(redirectUrl, "_blank")?.focus();
              };
            }
          }
        });
      }
    };
    onMessageListener();
  }, []);

  return (
    <div className=' bg-black  p-0 flex flex-col'>
      <div className='flex-1 overflow-y-auto m-1 pb-16 pt-18'>
        {HUNTING_GROUNDS.map((item) => (
          <div
            key={item.name}
            className={`flex items-center px-4 py-2 mb-2 rounded-md transition bg-[#2e2e2e]/80`}
          >
            <span className='text-lg mr-3'>
              {item.type === "dungeon" ? "🪦" : "⚔️"}
            </span>
            <div className='flex flex-col flex-1'>
              <span className='text-white font-semibold text-sm'>
                {item.name}
              </span>
              {item.url ? (
                <a
                  href={item.url}
                  target='_blank'
                  className='text-gray-300 text-xs'
                >
                  {item.note}
                </a>
              ) : (
                <span className='text-gray-300 text-xs'>{item.note}</span>
              )}
            </div>
            {item.control && (
              <span className='ml-2 text-red-500 text-base'>통제</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HuntingGroundList;
