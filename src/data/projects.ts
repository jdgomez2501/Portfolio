import aemas_cover from "@/assets/projects/aemas/aemas_cover.png";
import aemas_photo1 from "@/assets/projects/aemas/aemas_map.png";
import aemas_video1 from "@/assets/projects/aemas/rviz_edit.mp4";
import aemas_video2 from "@/assets/projects/aemas/gazebo_edit.mp4";

import robot_cover from "@/assets/projects/de10lite/cover.png";
import robot_photo from "@/assets/projects/de10lite/original.png";
import robot_photo3 from "@/assets/projects/de10lite/gray.png";
import robot_photo1 from "@/assets/projects/de10lite/mirror.png";
import robot_photo4 from "@/assets/projects/de10lite/edge.png";
import robot_photo7 from "@/assets/projects/de10lite/architecture.jpg";
import robot_photo6 from "@/assets/projects/de10lite/median_detail.png";
import robot_photo5 from "@/assets/projects/de10lite/median.png";
import robot_photo10 from "@/assets/projects/de10lite/waveform.png";
import robot_photo2 from "@/assets/projects/de10lite/rotation.png";
import robot_photo9 from "@/assets/projects/de10lite/RAM.png";
import robot_photo8 from "@/assets/projects/de10lite/ROM.png";

import recycle_bot_cover from "@/assets/projects/recycle_bot/cover.png";
import recycle_bot_photo1 from "@/assets/projects/recycle_bot/detail.jpg";
import recycle_bot_photo2 from "@/assets/projects/recycle_bot/functional.jpg";
import recycle_bot_photo4 from "@/assets/projects/recycle_bot/physical.jpg";
import recycle_bot_photo3 from "@/assets/projects/recycle_bot/selection.jpg";

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
    startDate: "2/2024",
    duration: "4 months",
    associatedWith: "Institut Polytechnique des Sciences Avancées - IPSA",
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
    title: "Image filtering and VGA display with FPGA",
    subtitle: "FPGA based system for real-time image filtering and VGA display using VHDL",
    description: "FPGA based system for real-time image filtering and VGA display using VHDL.",
    fullDescription: "This project involved the design and implementation of an FPGA-based system capable of performing real-time image processing operations like rotations, mirroing, grayscale or edge detection filtering, then displaying the processed images on a VGA monitor. The system was developed using VHDL and targeted the DE10-Lite development board, leveraging its onboard resources to achieve efficient image processing.",
    tags: ["Synchronized pixel pipelines", "VHDL", "Quartus", "QuestaSim","Testbenches", "Image Processing","VGA","DE10-Lite board"],
    image: robot_cover,
    role: "Hardware and software design leader",
    teamSize: "Personal project",
    startDate: "10/2024",
    duration: "4 months",
    associatedWith: "Institut Polytechnique des Sciences Avancées - IPSA",
    tasks: ["VGA display controller design",
      "Image filtering modules development (grayscale, edge-detection, rotation, mirroring, median filter)",
      "BRAM/ROM memory architecture design for image storage and buffering",
      "Testbench creation for functional and timing verification"
    ],
    contributions: [
    ],
    keyResults: [
      "Designed VHDL RTL modules for grayscale and edge-detection filters with cycle-synchronized pixel pipelines.",
      "Developed and verified a VGA controller meeting strict timing requirements for real-time display.",
      "Managed BRAM/ROM memory architectures for buffering and optimized memory access timing.",
      "Performed synthesis, place&route, and timing analysis using Intel Quartus.",
      "Built testbenches in QuestaSim for functional and timing verification using waveform analysis."
    ],
    media: [
      { url: robot_photo, type: "image" },
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
    subtitle: "",
    description: "Design of an autonomous mobile robotic platform for collecting objects located in undesired areas.",
    fullDescription: "Design of an autonomous mobile robotic platform for collecting objects located in undesired areas within industrial environments. The project covered the full product development cycle, including conceptual design, preliminary design, detailed design, prototyping, testing, and validation. Methodologies and tools applied included Product Design Specifications (PDS), morphological matrix, decision matrix, functional architecture, physical architecture, engineering drawings, and fabrication specifications",
    tags: ["Mechatronics design", "PDS", "Robotics", "Computer vision", "Inventor", "Arduino", "Raspberry Pi", "Object detection","Motor control"],
    image: recycle_bot_cover,
    role: "Hardware & Control leader",
    teamSize: "3 people",
    startDate: "01/2022",
    duration: "5 months",
    associatedWith: "Universidad EIA (Colombia)",
    tasks: ["Definition of product design specifications (PDS) and requirements",
      "Conceptual design and selection of the optimal solution using morphological and decision matrices",
      "Detailed mechanical design of mobile platform using Autodesk Inventor",
      "Development of computer vision algorithms for object detection and localization using Python-OpenCV",
      "Implementation of motor control systems using Arduino and Raspberry Pi for autonomous navigation"
    ],
    contributions: [
      "Brainstormed and defined product design specifications (PDS) to guide the development of the Recycle-bot.",
      "Contributed to the conceptual design phase, utilizing morphological and decision matrices to select the optimal robotic platform solution.",
      "Supported the development of computer vision algorithms with Python and OpenCV for effective object detection and localization in industrial settings.",
      "Implemented motor control systems on Arduino and Raspberry Pi to enable autonomous navigation and operation of the Recycle-bot.",
      "Led the assembly and testing of the robotic platform, ensuring all systems functioned cohesively to meet project objectives."
    ],
    keyResults: [
      "Successfully designed and implemented a mobile robotic platform capable of autonomous navigation and object collection in industrial environments.",
      "Developed and validated computer vision algorithms for object detection and localization, enabling the robot to identify and collect objects in real-time.",
      "Implemented motor control systems on Arduino and Raspberry Pi, ensuring reliable autonomous navigation and operation of the Recycle-bot.",
      
    ],
      
    media: [
      { url: recycle_bot_photo1, type: "image" },
      { url: recycle_bot_photo2, type: "image" },
      { url: recycle_bot_photo3, type: "image" },
      { url: recycle_bot_photo4, type: "image" },
    ]
  },
];
