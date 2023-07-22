import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { styles } from "../styles";

const features = [
  {
    name: '24/7 Availability',
    description:
      'Chatbots using AIML can operate around the clock, providing instant responses to users at any time of the day, improving customer service and user engagement.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Data Collection and Analytics',
    description:
      ' AIML-powered chatbots can collect user data and interactions, providing valuable insights into user behavior and preferences, which can be used to improve the website and services.',
    icon: LockClosedIcon,
  },
  {
    name: 'Natural Language Processing',
    description:
      'AIML allows developers to implement natural language processing capabilities into websites, enabling them to understand and respond to user input in a more human-like manner.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Personalization',
    description:
      ' By analyzing user interactions, an AIML-based chatbot can offer personalized recommendations and content based on individual preferences and needs.',
    icon: FingerPrintIcon,
  },
]

export default function Featured() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className={`mt-2 text-3xl font-bold ${styles.sectionHeadText} sm:text-4xl`}>
           Why this App?
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-3xl font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                    <feature.icon className={`h-6 w-6 ${styles.sectionSubText} uppercase`} aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className={`mt-2 text-lg leading-7 text-blue-300 font-normal`}>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
