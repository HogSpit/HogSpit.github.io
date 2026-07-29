/*
  EDIT THIS FILE TO CUSTOMIZE THE WEBSITE.

  You normally will not need to touch index.html or script.js.
  Replace placeholder links, text, projects, and services below.
*/

window.PORTFOLIO_CONTENT = {
  profile: {
    name: "HogSpit",
    availability: "Available for Roblox commissions",

    intro:
      "I build reliable gameplay systems, clean client-server logic, and fixes that hold up outside Studio.",

    aboutTitle:
      "A Roblox scripter who cares about the final result.",

    about:
      "I mainly focus on scripting, although I can do other things. I have been scripting for about 6 months off and on and recently have gotten into commissions. I enjoy the process and seeing the end result.",

    /*
      Roblox profile URLs use a numeric user ID.
      Open your Roblox profile, copy its full URL, and paste it here.
      Example: https://www.roblox.com/users/123456789/profile
    */
    robloxUrl: "https://www.roblox.com/users/979292490/profile",

    /*
      Paste your preferred commission contact link.
      This can be a Discord user link, commission post, Carrd, email link, etc.
      Example Discord link: https://discord.com/users/YOUR_DISCORD_USER_ID
      Example email link: mailto:you@example.com
    */
    contactUrl: "https://discord.com/users/949815074376265768",
    contactLabel: "Contact me",

    quickFacts: [
      "Gameplay systems",
      "Debugging",
      "UI logic",
      "Client-server code"
    ]
  },

  /*
    PROJECT MEDIA OPTIONS

    Clickable custom image:
    1. Put your image inside the assets folder.
    2. Set url to that image.
    3. Set link to the YouTube video.

    media: {
      type: "image",
      url: "assets/my-project-thumbnail.png",
      alt: "A clear description of the screenshot",
      link: "https://youtu.be/VIDEO_ID"
    }

    Temporary placeholder:
    media: {
      type: "placeholder",
      label: "Add a project image"
    }
  */
  projects: [
    {
      title: "Multi Directional Dropper",
      description:
        "This is a simple tycoon dropper system that can be rotated and still function without editing the script.",
      tags: ["Luau", "Gameplay", "Server"],
      media: {
        type: "image",
        url: "assets/dropper-thumbnail.png",
        alt: "Multi Directional Dropper project preview",
        link: "https://youtu.be/0BwZd8slvDE"
      },
      projectUrl: "https://youtu.be/0BwZd8slvDE"
    },
    {
      title: "Simple Mining System",
      description:
        "This is a simple mining system that allows you to use different pickaxes to mine a rock and earn pebbles.",
      tags: ["Simulator", "Client", "Mining"],
      media: {
        type: "image",
        url: "assets/mining-thumbnail.png",
        alt: "Simple Mining System project preview",
        link: "https://youtu.be/4rI9V99GnG4"
      },
      projectUrl: "https://youtu.be/4rI9V99GnG4"
    },
    {
      title: "Little Game",
      description:
        "This is a little game I made by myself to play with my friends on. I made the ui, the scripts, the slap hand, and its animation.",
      tags: ["Game", "Goal", "Task"],
      media: {
        type: "image",
        url: "assets/little-game-thumbnail.png",
        alt: "Little Game project preview",
        link: "https://youtu.be/Lmkz5KS7fn0"
      },
      projectUrl: "https://youtu.be/Lmkz5KS7fn0"
    }
  ],

  services: [
    {
      number: "01",
      title: "Gameplay systems",
      description:
        "Most systems that you could use in your game."
    },
    {
      number: "02",
      title: "UI scripting",
      description:
        "Most UI scripts that enhance the smoothness and functions of your menus."
    },
    {
      number: "03",
      title: "Debugging",
      description:
        "Fixing most bugs that you may find are an unwanted part of your game."
    },
    {
      number: "04",
      title: "Data and architecture",
      description:
        "Good script structure, organization, and non-personalized script making to allow you to hand your game off to others after me."
    }
  ],

  process: [
    {
      title: "Define the scope",
      description: "We agree on the exact features, references, deadline, and payment."
    },
    {
      title: "Build and update",
      description: "I script the system and share useful progress updates or test clips."
    },
    {
      title: "Test and hand off",
      description: "We verify the result in-game, handle agreed revisions, and complete delivery."
    }
  ]
};
