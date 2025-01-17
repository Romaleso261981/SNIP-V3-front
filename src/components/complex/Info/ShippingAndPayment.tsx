import { FC } from "react";

const ShippingAndPayment: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center min-w-80 text-center">
        <h2 className="text-gold font-medium text-3xl leading-[38.4px] p-3">
          доставка
        </h2>
        <div className="w-full text-black font-medium leading-[22.4px] p-10">
          <p className="">
             «СНІП» заснований 2023 року у місті Львові нами:  художницею Лілею
            Лучишин-Максимюк та фольклористкою Мартою Ясінською.
          </p>
          <p className="mt-3">
            Одного разу відбулося “магічне поєднання” наших творчих сил. У
            результаті співпраці виникла майстерня соломи «СНІП», де створюємо
            солом’яні вироби та набори-конструктори для виготовлення павуків, а
            також проводимо майстер-класи та розробляємо авторські павуки.
          </p>
        </div>
        <div className="w-full text-black font-medium leading-[22.4px] p-10">
          <h2 className="text-gold font-medium text-3xl leading-[38.4px] p-3">
            Оплата
          </h2>
          <p className="w-full text-black font-medium leading-[22.4px]">
             «СНІП» заснований 2023 року у місті Львові нами:  художницею Лілею
            Лучишин-Максимюк та фольклористкою Мартою Ясінською.
          </p>
          <p className="w-full text-black font-medium leading-[22.4px] mt-3">
            Одного разу відбулося “магічне поєднання” наших творчих сил. У
            результаті співпраці виникла майстерня соломи «СНІП», де створюємо
            солом’яні вироби та набори-конструктори для виготовлення павуків, а
            також проводимо майстер-класи та розробляємо авторські павуки.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingAndPayment;
