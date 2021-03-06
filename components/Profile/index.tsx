import Image from "next/image";

const Profile: React.FC = () => {
  return (
    <div className="py-32 px-4 text-stone-600 bg-stone-50">
      <h1 className="mb-20 text-2xl tracking-wider text-center">ABOUT ME</h1>
      <div className="md:flex md:px-32">
        <div className="mb-3 text-center md:text-right md:w-1/2 md:pr-4">
          <Image src="/me.jpg" width={240} height={240} alt="profileImage" />
        </div>

        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="mb-3 text-2xl tracking-wide">Megumi Tanimoto</h2>
          <p className="font-mono tracking-wider leading-6">
            山口県生まれ。
            <br />
            大学卒業後、法律事務、公務員を経て2021年より
            <br />
            フロントエンドエンジニアとして働く。
            <br />
            UI/UXを意識したデザインの設計から
            <br />
            モダンなフロントエンド開発ができるエンジニアを目指し
            <br />
            日々勉強中です。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
