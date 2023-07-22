import { styles } from "../styles"
import yash from "../assets/Yash_Inhouse.jpg"
import ritesh from "../assets/ritesh.jpeg"
import sandesh from "../assets/sandesh.jpeg"
import rishabh from "../assets/rishabh.jpeg"

const people = [
    {
      name: 'Yash Harale',
      role: 'Web Developer',
      imageUrl:
        `${yash}`
    },
    {
        name: 'Darshan Chatrawat',
        role: 'Web Developer',
        imageUrl:
        `${yash}`
      },
      {
        name: 'Rishabh Singh',
        role: 'AIML Developer',
        imageUrl:
        `${rishabh}`
      },
      {
        name: 'Ritesh Singh',
        role: 'Web Developer',
        imageUrl:
        `${ritesh}`
      },
      {
        name: 'Sandesh Gavali',
        role: 'Python Developer',
        imageUrl:
        `${sandesh}`
      },
    
  ]
  
  export default function Team() {
    return (
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className={`text-3xl font-bold tracking-tight ${styles.heroHeadText} sm:text-4xl`}>Meet our leadership</h2>
            <p className={`mt-6 text-lg leading-8 ${styles.sectionSubText}`}>
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full object-cover" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className={`text-base font-semibold leading-7 tracking-tight ${styles.heroSubText}`}>{person.name}</h3>
                    <p className={`text-sm font-semibold leading-6 ${styles.sectionSubText} text-indigo-600`}>{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  