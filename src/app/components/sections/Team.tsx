import Image from "next/image";
import { Tooltip } from "../ui/Tooltip";
import styles from "./team.module.css";

type Member = {
  name?: string;
  role?: string;
  desc?: string;
  avatar: string;
};

const teamMembers: Member[] = [
  {
    name: "Michael",
    role: "Co-Founder, Developer",
    desc: "Leading development and architecture with expertise in scalable systems and cloud infrastructure.",
    avatar: "https://www.tapback.co/api/avatar/MIrsiq",
  },
  {
    name: "Adam",
    role: "Co-Founder, Designer & Developer",
    desc: "Crafting web and mobile experiences with React, Tailwind CSS and Motion.",
    avatar: "https://www.tapback.co/api/avatar/GBzhzU",
  },
  {
    name: "Henry",
    role: "Front-end Developer",
    desc: "Building beautiful and responsive user interfaces with modern web technologies.",
    avatar: "https://www.tapback.co/api/avatar/Otsvei",
  },
  {
    name: "Cortney",
    role: "Back-end Developer",
    desc: "Developing robust APIs and microservices to power our applications.",
    avatar: "https://www.tapback.co/api/avatar/YEGeDk",
  },
  {
    name: "Ashley",
    role: "Designer",
    desc: "Creating intuitive and engaging user experiences through thoughtful design.",
    avatar: "https://www.tapback.co/api/avatar/PaHuo8",
  },
  {
    name: "John",
    role: "Reasearch Scientist",
    desc: "Exploring cutting-edge technologies and driving innovation in AI and machine learning.",
    avatar: "https://www.tapback.co/api/avatar/RXraJG",
  },
  {
    name: "Tammi",
    role: "Blockchain Specialist",
    desc: "Implementing secure and efficient blockchain solutions for next-gen applications.",
    avatar: "https://www.tapback.co/api/avatar/DX4JZg",
  },
];

const TeamCard = ({ member }: { member: Member }) => {
  return (
    <div className="cursor-default text-left">
      <p className="font-sans text-base font-bold text-white">{member.name}</p>
      <p className="mt-0.5 text-pretty text-white">{member.role}</p>
      <p
        className="mt-3 border-t pt-3 text-pretty text-white/50"
        dangerouslySetInnerHTML={{ __html: member.desc as string }}
      />
    </div>
  );
};

export const Team = () => {
  return (
    <section className="mb-48 text-center">
      <h3 className="text-4xl font-bold text-white">
        {"Meet the Minds Shaping the Future"}
      </h3>
      <p className="max-w-ch mx-auto mt-3 mb-6">
        {
          "Our team is a collective of visionaries, engineers, and futurists, each committed to reshaping the world. At TerraNova Labs, we don’t just predict the future — "
        }
        <span className="font-medium text-white">{"we build it"}</span>
        {"."}
      </p>
      {/* <div className="mx-auto flex max-w-xs flex-wrap justify-center gap-x-4 gap-y-2"> */}
      <div className="bg-bg/90 mx-auto flex max-w-fit -space-x-4 rounded-full border-1 p-1 shadow-xl shadow-black">
        {teamMembers.map((item, index) => (
          <Tooltip
            key={index}
            anchor="bottom"
            node={<TeamCard member={item} />}
            className="-bottom-2 w-2xs shadow-xl shadow-black/50"
          >
            <div className="ease-cubic transition-[margin] duration-500 hover:-mt-2 hover:mb-2">
              <Image
                src={item.avatar}
                width={64}
                height={64}
                alt=""
                // className={`${styles.teamMember} rounded-full border-2 border-black transition-[margin] hover:-mr-2 hover:ml-2`}
                className={`${styles.teamMember} rounded-full border-2 border-black bg-black`}
                loading="lazy"
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </section>
  );
};
