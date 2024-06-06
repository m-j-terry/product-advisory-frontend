import team from './team'
import Image from 'next/image'

export default function MeetTheTeam(){
    return(
        <div className="greyBackground">
            <center className="sectionHeader">
                <h2 className="sectionTitle">Meet the Team</h2>
            </center>
            <center>
                <ul className="carousel" id="MeetTheTeam">
                {team.map(teamMember => (
                    <li className="teamMemberCard">
                        {/* <img className="teamMemberPhoto" src={teamMember.img} alt=":)"></img> */}
                        <Image 
                            className="teamMemberPhoto"
                            src={teamMember.img}
                            alt=":)"
                        />
                        <h1 className="teamMemberName">{teamMember.name}</h1>
                        <h2 className="teamMemberRole">{teamMember.role}</h2>
                        <p className="teamMemberBio">{teamMember.bio}</p>
                    </li>
                ))}
                </ul>
            </center>
        </div>
    )
}