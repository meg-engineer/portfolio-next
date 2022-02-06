import Image from "next/image";

const Skill: React.FC = () => {
  return (
    <div className="py-32 ">
      <div className="flex flex-col justify-center text-stone-600">
        <h1 className="mb-20 text-2xl tracking-wider text-center">SKILL</h1>
        <div className="gap-8 justify-center px-4 md:flex md:px-32">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">フロントエンド関連</h2>
              <ul>
                <li className="flex items-center mb-1 font-light">
                  <Image src="/icon/js.png" width={32} height={32} alt="icon" />
                  <span className="ml-2">JavaScript</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image src="/icon/ts.png" width={32} height={32} alt="icon" />
                  <span className="ml-2">TypeScript</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/react.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2"> React</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/next.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">Next.js</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image src="/icon/xd.png" width={32} height={32} alt="icon" />
                  <span className="ml-2">AdobeXD</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/figma.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">Figma</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h2 className="card-title">バックエンド関連</h2>
              <ul>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/rails.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">Ruby on Rails</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/docker.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">Docker</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/vercel.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">Vercel</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/aws.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">AWS ECS/EC2</span>
                </li>
                <li className="flex items-center mb-1 font-light">
                  <Image
                    src="/icon/firebase.png"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                  <span className="ml-2">firebase</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
