import GlassPane from "@/components/common/GlassPane"
import Link from "next/link"

export default function Team() {
  const data = {
    title: "THE RESEARCH TEAM ",
    mainContent: `The research team is led by Julie Biehl, Clinical Law Professor and Director of the Children and Family Justice Center (CFJC) at Northwestern Pritzker School of Law, Stephanie Kollmann, Policy Director, Children and Family Justice Center at Northwestern Pritzker School of Law,  and Sino Esthappan, a Ph.D. candidate in the Sociology Department and Center for Legal Studies at Northwestern University.`,
    teamContent: `The IL PD Stats website was designed and is maintained by Hunter Motko, Software Engineer. Marisa LaBella, Legal Assistant at Northwestern Law, is a policy analyst and project manager for the team. `,
    leadIn: "The following current and former Northwestern Law and undergraduate students contributed to this research and data collection:",
    team: [
      'Jonathan Jean-Baptiste  NULS ‘25',
      'Katie Behzad NULS ‘22',
      'Sarha Buzi NULS ‘26',
      'Jihao Ding NULS ‘23',
      'Erin Hughes NULS ‘23',
      'Alexis Jones Johnson NULS ‘22',
      'Alyssa Hiller NULS ‘25',
      'Ashley Justice NULS ‘24',
      'Halley Lane NULS ‘25',
      'Douglas Lee NU ‘25',
      'Diego Manrique NULS ‘25',
      'Ariana Moore NULS ‘22',
      'Lillian Parker NULS ‘26',
      'Ksenia Polyarskaya NULS ‘26',
      'Jennifer Shanahan NULS ‘22',
      'Emma Silberstein NULS ‘22',
      'Cai Wheeler NULS ‘23',
      'Daniel Wolf NU ‘25',
    ],
    subContent: "This research was informed by chief public defenders, assistant public defenders, and contract defense attorneys, who graciously shared their experiences representing their clients in Illinois’ current public defense system.",
    endContent: "Finally, the research team acknowledges and thanks the Illinois Supreme Court under the leadership of Kathy Saltmarsh and Cara LeFevour Smith for their efforts to improve public defense through their task force and recommendations.",
    tile: "CONTACT US",
    conact: "The research team welcomes feedback! If you would like to submit a correction to our dataset, please send us an attachment with an original, verified source, along with a description in the box below."
  }
  const { title, mainContent, teamContent, leadIn, team, subContent, endContent } = data
  return (
    <GlassPane className="w-full md:w-3/4 mx-auto my-5">
      <div className="w-full rounded-lg text-black p-3 my-5">
        <h1 className="text-4xl bg-purple-900 border rounded text-white text-center p-3 font-extrabold mx-auto md:text-5xl">{title}</h1>
        <h2 className="m-1 p-1">
          {mainContent}
        </h2>
        <h2 className="m-1 p-1">
          {teamContent}
        </h2>
        <h2 className="m-1 p-1">
          {leadIn}
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
