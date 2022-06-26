import web from "./img/Web-Design-and-Development.jpg";
import android from "./img/Android_Development.jpg";
import graphic from "./img/Graphic-and-UI-UX-Design.jpg";
import marketing from "./img/Digital-Marketing-Service.jpg";

const tabData = [
  {
    id: 1,
    tabName: "Web Design & Development",
    tabText:
      "Bringing your ideas to live, website designs is our forte. We carve perfect designs to build creative websites that engage users on both desktop & mobile devices with its ultra modern responsive UI.",
    tabImg: web,
    tabList: [
      {
        Item: "Highly Professional Design",
        Item: "Responsive Design",
        Item: "Multi-level Security",
        Item: "Email Marketing Integration",
        Item: "Dashboard/ Reporting Tools ",
        Item: "120 Days Free Support",
      },
    ],
  },
  {
    id: 2,
    tabName: "Android Application Development",
    tabText:
      "We build interactive mobile apps to extend your reach to potential customers & maximize conversions. Our App run seamlessly to deliver amazing mobile user experience.",
    tabImg: android,
    tabList: [
      {
        tabItem1: "Custom App Development",
        tabItem2: "Facebook, Google, Firebase, REST API Integration",
        tabItem3: "Web Services Apps",
        tabItem4: "PhP API’s Implementation",
        tabItem5: "Beginner friendly  ",
        tabItem6: "Free updates",
        tabItem7: "120 Days Free Support",
      },
    ],
  },

  {
    id: 3,
    tabName: "Graphic  & UI/UX  Design Service",
    tabText:
      "Our skilled designers have the experience and creativity it takes to drive results through graphic & UI design. We gather information about your brand from the big picture to the little details and explore your objectives, so we can deliver creative solutions and the results you need.",
    tabImg: graphic,
    tabList: [
      {
        tabItem1: "Pixel Perfect UI design",
        tabItem2: "Clean coded",
        tabItem3: "Professional and Creative Designs",
        tabItem4: "Quick Delivery with 3D Mock-ups",
        tabItem5: "Unlimited Revisions   ",
      },
    ],
  },
  {
    id: 4,
    tabName: "Digital Marketing Service",
    tabText:
      "We will help in Implementing all levels of Social media marketing for new and aging websites. For taking your business to a top, the virtual bd always helps by marketing.",
    tabImg: marketing,
    tabList: [
      {
        tabItem1: "Social Media Marketing",
        tabItem2: "B2B Lead Generation",
        tabItem3: " Google Ads Marketing ",
        tabItem4: "LinkedIn Marketing",
        tabItem5: "Email Marketing  ",
        tabItem6: "Reporting After Marketing ",
        tabItem7: "Free Future consultant",
      },
    ],
  },
];
export default tabData;
