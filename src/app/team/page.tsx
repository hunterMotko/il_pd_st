import GlassPane from "@/components/common/GlassPane"
import Link from "next/link"

export default function Team() {
  const data = {
    title: "THE RESEARCH TEAM ",
    mainContent: `The research team is led by Julie Biehl, Clinical Law Professor and Director, Children and Family Justice Center (CFJC), Northwestern Pritzker School of Law, and Sino Esthappan, Ph.D. candidate, Sociology Department and Center for Legal Studies, Northwestern University. Hunter Motko is the software engineer for this site. 
    Marisa LaBella, legal assistant, Bluhm Legal Clinic, is the research team’s utility player – assisting with administrative tasks and data gathering. Finally, the following current and former Northwestern University law and undergraduate students participated in every aspect of the research and without whom the data presented here would not exist:`,
    team: [
      'Katie Behzad 		NULS \‘22 ',
      'Jihao Ding 		NULS \‘23 ',
      'Erin Hughes 		NULS \‘23 ',
      'Alexis Jones Johnson 	NULS \‘22 ',
      'Alyssa Hiller 		NULS \‘25 ',
      'Ashley Justice 	NULS \‘24 ',
      'Halley Lane 		NULS \‘25 ',
      'Douglas Lee 		NU \‘25 ',
      'Diego Manrique 	NULS \‘25 ',
      'Ariana Moore 		NULS \‘22 ',
      'Jennifer Shanahan 	NULS \‘22 ',
      'Emma Silberstein 	NULS \‘22 ',
      'Cai Wheeler 		NULS \‘23 ',
      'Daniel Wolf		NU \‘25 ',
    ],
    subContent: "The research team thanks Illinois’ chief public defenders, assistant public defenders, and contract defense attorneys for their representation of accused people, especially under the conditions revealed by the data. In particular, the research team wants to thank the over 20 chief public defenders, assistant public defenders and contract attorneys who shared their perspective on the Illinois’ indigent defense system with the research team.",
    endContent: "Finally, the research team is grateful to the Illinois Supreme Court for their investment   in improving Illinois’ indigent defense system and creating a task force to examine and make recommendations regarding indigent defense. In particular, the research team appreciates and recognizes Kathy Saltmarsh and Cara LeFevour Smith for their steadfast leadership and dedication to Illinois’ criminal and juvenile legal system.",
    tile: "CONTACT US",
    conact: "The research team welcomes feedback! If you would like to submit a correction to our dataset, please send us an attachment with an original, verified source, along with a description in the box below."
  }
  const { title, mainContent, team, subContent, endContent } = data
  return (
    <GlassPane className="w-full md:w-3/4 mx-auto my-5">
      <div className="w-full rounded-lg text-black p-3 my-5">
        <h1 className="text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl">{title}</h1>
        <h2 className="m-1 p-1">
          {mainContent}
        </h2>
        <ul
          className={
            "mx-auto w-full lg:w-2/3 rounded p-2 border border-purple-900 grid md:grid-cols-2 place-items-center"
          }
        >
          {team.map((name, i) => <li key={i}>{name}</li>)}
        </ul>
        <p className="m-1 p-2">
          {subContent}
        </p>
        <p className="m-1 p-2">
          {endContent}
        </p>
      </div>

      <Link href="mailto:illinoispublicdefensestudy@gmail.com"
        className={`h-20 w-1/4 md:4/5 mx-auto my-3 shadow-lg bg-purple-900 text-white text-center text-3xl
          flex justify-center items-center
          hover:bg-white hover:text-purple-900 hover:shadow-sm hover:border-2 hover:border-purple-900 border rounded-md duration-300 
        `}
      >
        Contact Us
      </Link>
    </GlassPane>
  )
}
