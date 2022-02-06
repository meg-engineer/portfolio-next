import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center py-32 px-2 h-96 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url(" + "/main.jpg" + ")",
      }}
    >
      <div className="text-stone-600 card glass lg:card-side">
        <div className="max-w-md card-body">
          <h2 className="card-title">CONTACT</h2>
          <p className="text-sm tracking-wider leading-5">
            ご質問、ご感想、お仕事のご相談等、 お気軽にご寄せください。
            <br />
            Twitterでのご連絡お待ちしております。
          </p>
          <div className="card-actions">
            <a
              href="https://twitter.com/MegEngineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-600 bg-stone-300 hover:bg-stone-50 rounded-full border-0 btn"
            >
              <Image
                src="/icon/twitter-brands.svg"
                width={16}
                height={16}
                alt="twitter"
              />
              <span className="ml-2">Twitterはこちら</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
