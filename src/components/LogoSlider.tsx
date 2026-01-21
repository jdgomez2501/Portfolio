const logos = [
  { name: "Quartus", url: "https://electroniques-biz.b-cdn.net/app/uploads/sites/5/2014/08/c936dd70be92a2fa2c6364fd37eb4467-scaled.jpg" },
  { name: "Gazebo", url: "https://images.seeklogo.com/logo-png/31/2/gazebo-logo-png_seeklogo-317144.png" },
  { name: "Ubuntu", url: "https://cdn.worldvectorlogo.com/logos/ubuntu-1.svg" },
  { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", url: "https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-svg-download-png-8630395.png?f=webp" },
  { name: "ROS", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ros_logo.svg/1280px-Ros_logo.svg.png" },
  { name: "SolidWorks", url: "https://cdn.worldvectorlogo.com/logos/solidworks-logo-1.svg" },
  { name: "C", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },  
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Matlab", url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" },
  { name: "Raspberry Pi", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
  { name: "Inventor", url: "https://innovate.utk.edu/wp-content/uploads/2019/09/Inventor-e1523957011698.png" },
  { name: "Visual Studio", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
  { name: "Linux", url: "https://www.clipartmax.com/png/middle/249-2494952_penguin-clipart-profile-linux-logo-vector.png" },
  { name: "Arduino", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "Zenoh", url: "https://zenoh.io/img/zenoh-dragon-small.png" },
  
  { name: "Quartus", url: "https://electroniques-biz.b-cdn.net/app/uploads/sites/5/2014/08/c936dd70be92a2fa2c6364fd37eb4467-scaled.jpg" },
  { name: "Gazebo", url: "https://images.seeklogo.com/logo-png/31/2/gazebo-logo-png_seeklogo-317144.png" },
  { name: "Ubuntu", url: "https://cdn.worldvectorlogo.com/logos/ubuntu-1.svg" },
  { name: "VS Code", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", url: "https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-svg-download-png-8630395.png?f=webp" },  
  { name: "ROS", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ros_logo.svg/1280px-Ros_logo.svg.png" },
  { name: "SolidWorks", url: "https://cdn.worldvectorlogo.com/logos/solidworks-logo-1.svg" },
  { name: "C", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Matlab", url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" },
  { name: "Raspberry Pi", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
  { name: "Inventor", url: "https://innovate.utk.edu/wp-content/uploads/2019/09/Inventor-e1523957011698.png" },
  { name: "Visual Studio", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
  { name: "Linux", url: "https://www.clipartmax.com/png/middle/249-2494952_penguin-clipart-profile-linux-logo-vector.png" },
  { name: "Arduino", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "Zenoh", url: "https://zenoh.io/img/zenoh-dragon-small.png" },
];


const LogoSlider = () => {
  return (
    <div className="w-full overflow-hidden py-8 relative">
      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-r from-background via-background/100 to-transparent z-10 pointer-events-none" />
      
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 bg-gradient-to-l from-background via-background/100 to-transparent z-10 pointer-events-none" />
      
      <div className="flex animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div 
            key={`first-${index}`}
            className="flex-shrink-0 mx-8 transition-all duration-400"
          >
            <img 
              src={logo.url} 
              alt={logo.name}
              className="h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
