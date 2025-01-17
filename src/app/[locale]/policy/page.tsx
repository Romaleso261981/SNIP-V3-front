"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="w-full flex py-6 flex-col justify-center items-center h-full">
        <div className="w-1/2 flex flex-col mt-16 items-center">
          <h1 className="text-center ">Політика конфіденційності</h1>
          <div className="w-2/3 text-center mt-4 mb-16">
            <p>
              Ця політика конфіденційності описує, як ми збираємо,
              використовуємо та захищаємо вашу інформацію під час використання
              нашого веб-сайту.
            </p>
          </div>
          <div className="w-2/3 text-left mb-16">
            <h2>Збір інформації</h2>
            <p>Ми можемо збирати такі типи інформації:</p>
            <ul>
              <li>
                Особиста інформація (наприклад, ім&apos;я, адреса електронної
                пошти)
              </li>
              <li>
                Інформація про використання (наприклад, які сторінки відвідуєте)
              </li>
            </ul>
            <h2>Використання інформації</h2>
            <p>Зібрана інформація може використовуватися для:</p>
            <ul>
              <li>Надання послуг та підтримки</li>
              <li>Поліпшення нашого веб-сайту</li>
              <li>Надсилання маркетингових матеріалів</li>
            </ul>
            <h2>Захист інформації</h2>
            <p>
              Ми вживаємо відповідні заходи для захисту вашої інформації від
              несанкціонованого доступу, змін, розкриття або знищення.
            </p>
            <h2>Права користувачів</h2>
            <p>Ви маєте право:</p>
            <ul>
              <li>Отримати доступ до вашої особистої інформації</li>
              <li>Виправити неточності в вашій інформації</li>
              <li>Вимагати видалення вашої особистої інформації</li>
            </ul>
            <h2>Зміни до політики конфіденційності</h2>
            <p>
              Ми залишаємо за собою право оновлювати цю політику
              конфіденційності в будь-який час. Зміни набирають чинності з
              моменту їх публікації на нашому веб-сайті.
            </p>
            <h2>Контактна інформація</h2>
            <p>
              Якщо у вас є питання щодо цієї політики конфіденційності, будь
              ласка, зв&apos;яжіться з нами за адресою: info@company.com
            </p>
          </div>
          <button
            className="p-4 w-72 ring-gold ring-1 hover:bg-black"
            onClick={() => router.push("/")}
          >
            Повернутись на головну
          </button>
        </div>
      </div>
    </div>
  );
}
