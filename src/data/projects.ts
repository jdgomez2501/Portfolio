import aemas_cover from "@/assets/projects/aemas/aemas_cover.png";
import aemas_photo1 from "@/assets/projects/aemas/aemas_map.png";
import aemas_video1 from "@/assets/projects/aemas/rviz_edit.mp4";
import aemas_video2 from "@/assets/projects/aemas/gazebo_edit.mp4";

import robot_cover from "@/assets/projects/de10lite/cover.png";
import robot_photo2 from "@/assets/projects/de10lite/gray.png";
import robot_photo1 from "@/assets/projects/de10lite/mirror.png";
import robot_photo4 from "@/assets/projects/de10lite/edge.png";
import robot_photo7 from "@/assets/projects/de10lite/architecture.jpg";
import robot_photo6 from "@/assets/projects/de10lite/median_detail.png";
import robot_photo5 from "@/assets/projects/de10lite/median.png";
import robot_photo8 from "@/assets/projects/de10lite/waveform.png";
import robot_photo3 from "@/assets/projects/de10lite/rotation.png";
import robot_photo9 from "@/assets/projects/de10lite/RAM.png";
import robot_photo10 from "@/assets/projects/de10lite/ROM.png";

import recycle_bot_cover from "@/assets/projects/recycle_bot/cover.png";
import recycle_bot_video1 from "@/assets/projects/recycle_bot/demo.mp4";
import recycle_bot_photo1 from "@/assets/projects/recycle_bot/photo.png";

import coming from "@/assets/projects/cs.png";

export interface MediaItem {
  url: string;
  type: "image" | "video";
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  image: string;
  role?: string;
  teamSize?: string;
  startDate?: string;
  duration?: string;
  associatedWith?: string;
  tasks?: string[];
  contributions?: string[];
  keyResults?: string[];
  media?: MediaItem[];
}

export const projects: Project[] = [
  {
    id: "aemas",
    title: "AEMAS",
    subtitle: "Autonomous exploration of unknown environment using a multi-agent system.",
    description: "Autonomous exploration of unknown environment using a multi-agent system.",
    fullDescription: "The main goal of this project is to implement a distributed approach that makes autonomous ground vehicles explore an unknown environment and map it efficiently.",
    tags: ["Autonomous Exploration", "ROS", "Multi-agent","Gazebo","SLAM","Path Planning","Mapping","Navigation","Task allocation"],
    image: aemas_cover,
    role: "Exploration strategy leader",
    teamSize: "4 people",
    startDate: "10/2024",
    duration: "4 months",
    associatedWith: "IPSA",
    tasks: ["Simultaneous Localization and Mapping (SLAM)",
      "Map management to generate the global map from the information of each robot.",
      "Navigation control and path planning for each agent.",
      "Exploration strategy implementation to decide the next goal of each robot."
    ],
    contributions: [
      "Implemented A* path-planning algorithm for efficient navigation in unknown environments",
      "Coded frontier detection algorithm in Python using Wavefront Frontier Detection method to identify exploration targets",
      "Developed multi-robot task allocation system based on the Remember-All frontier allocation algorithm for optimal goal assignment"
    ],
    keyResults: [
      "Achieved efficient environment mapping through coordinated robot navigation and exploration",
      "Successfully deployed a multi-agent exploration system in Gazebo simulator",
      "Demonstrated effective task allocation among robots, enhancing exploration speed and coverage"
    ],
    media: [
      { url: aemas_video2, type: "video" },
      { url: aemas_video1, type: "video" },
      { url: aemas_photo1, type: "image" },
    ]
  },

  {
    id: "de10lite",
    title: "Image filtering with FPGA",
    subtitle: "3-DOF anthropomorphic robot with computer vision capable of autonomously playing tic-tac-toe",
    description: "Anthropomorphic 3DOF robot with computer vision for autonomous and real-time Tic Tac Toe gameplay against human users.",
    fullDescription: "This project involved the complete design, fabrication, assembly, and evaluation of an anthropomorphic robot endowed with three degrees of freedom, conceived to autonomously play Tic Tac Toe against a human opponent. The work encompassed detailed CAD modelling, component selection for mechanical and electronic subsystems, the development of a custom PCB, and the implementation of computer vision algorithms that enabled the robot to perceive the game board and execute strategic movements.",
    tags: ["Robotics", "Computer Vision", "3DOF", "Embedded Systems", "Human–Robot Interaction"],
    image: robot_cover,
    role: "Design and software leader",
    teamSize: "5 people",
    startDate: "01/2024",
    duration: "5 months",
    associatedWith: "Universidad de Oviedo (Spain)",
    tasks: ["A Simultaneous Localization and Mapping module (SLAM)",
      "Map manager to generate the map from the information of the robots.",
      "Navigation module",
      "Exploration strategy"
    ],
    contributions: [
      "Designed and led the mechanical prototype and assembly of the robot’s 3DOF anthropomorphic architecture",
      "Developed embedded motion-control software and turn-based game-logic execution",
      "Co-authored the vision pipeline for board detection, perspective correction, and symbol recognition",
      "Supported the design and integration of a custom PCB for motor, sensor, and logic coordination",
      "Conducted stability, precision, and autonomy tests across full game cycles",
      "Collaborated in the creation of documentation, user manuals, and detailed engineering drawings"
    ],
    keyResults: [
      "Fully validated mechanical design enabling stable 3DOF anthropomorphic motion with minimal backlash", 
      "Vision pipeline achieved reliable symbol detection and board-state reconstruction under variable lighting",
      "Autonomous gameplay module executed full game cycles with strategic move planning",
      "Custom PCB and distributed-control architecture ensured synchronized motion and sensor acquisition",
      "Robot demonstrated consistent end-effector accuracy sufficient for drawing within the game grid"
    ],
    media: [
      { url: robot_photo1, type: "image" },
      { url: robot_photo2, type: "image" },
      { url: robot_photo3, type: "image" },
      { url: robot_photo4, type: "image" },
      { url: robot_photo5, type: "image" },
      { url: robot_photo6, type: "image" },
      { url: robot_photo7, type: "image" },
      { url: robot_photo8, type: "image" },
      { url: robot_photo9, type: "image" },
      { url: robot_photo10, type: "image" },
    ]
  },

  {
    id: "recycle_bot",
    title: "Recycle-bot",
    subtitle: "Set of tele-manipulated 6DOF robotic arms for handling biological agents in pharmaceutical and scientific applications",
    description: "Telemanipulated dual 6DOF robotic arms designed to replicate human motion for safe handling of biological agents in controlled environments.",
    fullDescription: "This project focused on the design, construction, and programming of a pair of tele-manipulable robotic arms that replicate human arm movements for handling biological agents. These robotic arms are equipped with the flexibility and precision necessary to mimic human dexterity while ensuring safety and efficiency in environments requiring precision handling.",
    tags: ["Robotics", "Telemanipulation", "6DOF", "Biomedical Engineering", "Embedded Systems"],
    image: recycle_bot_cover,
    role: "Project leader",
    teamSize: "4 people",
    startDate: "08/2022",
    duration: "5 months",
    associatedWith: "Universidad Autónoma del Caribe (Colombia)",
    tasks: ["A Simultaneous Localization and Mapping module (SLAM)",
      "Map manager to generate the map from the information of the robots.",
      "Navigation module",
      "Exploration strategy"
    ],
    contributions: [
      "Co-designed the robotic arms from scratch, focusing on joint architecture, arm structure, and visual appeal",
      "Developed joint-level control software enabling smooth replication of human arm motion",
      "Implemented algorithms for coordinated multi-joint mapping and operator input filtering",
      "Designed real-time wireless communication architecture using Bluetooth and microcontrollers",
      "Supervised integration of custom PCBs and mechanical subsystems into the tele-operation system",
      "Conducted performance testing to evaluate precision, latency, and operator usability"
    ],
    keyResults: [
      "Human-motion replication achieved through smooth joint interpolation with low perceived latency",
      "Reliable wireless teleoperation link established with consistent real-time command delivery",
      "Biomechanically inspired dual-arm CAD model completed following human arm kinematics",
      "Custom PCBs integrated for multi-joint coordination and data acquisition",
      "Functional prototypes capable of manipulating delicate materials safely and repeatably",
      "Two software registrations were obtained"
    ],
      
    media: [
      { url: recycle_bot_video1, type: "video" },
      { url: recycle_bot_photo1, type: "image" },
    ]
  },
];
