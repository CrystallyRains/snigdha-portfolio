import emoji from "react-easy-emoji";

export const greetings = {
	name: "Snigdha Chaudhari",
	title: "Hi all, I'm Snigdha",
	description:
		"I'm Snigdha ❤️, a Cloud Engineer passionate about designing scalable solutions and automating infrastructure with AWS, Docker, Kubernetes and Terraform. My skills include cloud management, containerization, and building CI/CD pipelines. I love solving complex problems and optimizing cloud resources through scripting in Python, Bash, and Go.",
	resumeLink:
		"https://bit.ly/3UF6kgN",
};

export const openSource = {
	githubUserName: "CrystallyRains",
};

export const contact = {};

export const socialLinks = {
//	url: "https://github.com/CrystallyRains/snigdha-portfolio.io/",
	linkedin: "https://www.linkedin.com/in/snigdha-chaudhari/",
	github: "https://github.com/CrystallyRains",
	hashnode: "https://hashnode.com/@SnigdhaC",
	twitter: "https://x.com/the_techy_gurl",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CLOUD ENGINEER PASSIONATE ABOUT AUTOMATION AND INFRASTRUCTURE MANAGEMENT",
	data: [
		{
			title: "Cloud Engineer",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Expertise in deploying scalable and secure cloud solutions on AWS."
				),
				emoji(
					"⚡ Proficient in cloud automation using Terraform and Ansible."
				),
				emoji(
					"⚡ Experience in containerization and orchestration using Docker and Kubernetes."
				),
				emoji(
					"⚡ Strong scripting skills with Python, Bash, and Go."
				),
				emoji(
					"⚡ Skilled in cloud cost optimization and monitoring with AWS CloudWatch."
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Terraform",
					fontAwesomeClassname: "logos:terraform",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
                                        skillName: "Kubernetes",
                                        fontAwesomeClassname: "logos:kubernetes",
                                },
                                {
                                        skillName: "Python",
                                        fontAwesomeClassname: "logos:python",
                                },
				{
                                        skillName: "Bash",
                                        fontAwesomeClassname: "logos:bash",
                                },
                                {
                                        skillName: "Go",
                                        fontAwesomeClassname: "logos:go",
                                },


			],
		},
		{
			title: "Cloud Infrastructure & Architecture",
			lottieAnimationFile: "/lottie/skills/cloud.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
                                emoji(
                                        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
                                ),
                                emoji(
                                        "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
                                ),
                                emoji(
                                        "⚡ Skilled in infrastructure monitoring and logging using AWS CloudWatch."
                                ),

			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				 {
                                        skillName: "AWS",
                                        fontAwesomeClassname: "logos:aws",
                                },
                                {
                                        skillName: "Azure",
                                        fontAwesomeClassname: "logos:microsoft-azure",
                                },
                                {
                                        skillName: "CloudWatch",
                                        fontAwesomeClassname: "logos:aws-cloudwatch",
                                },
                                {
                                        skillName: "Github Actions",
                                        fontAwesomeClassname: "logos:github-actions",
                                },
                                {
                                        skillName: "Github",
                                        fontAwesomeClassname: "akar-icons:github-fill",
                                },
                                {
                                        skillName: "Docker",
                                        fontAwesomeClassname: "logos:docker-icon",
                                },
                                {
                                        skillName: "Kubernetes",
                                        fontAwesomeClassname: "logos:kubernetes",
                                },

			],
		},
	],
};
		
export const SkillBars = [
  {
    Stack: "Cloud Infrastructure (AWS, Azure)",
    progressPercentage: "90",
  },
  {
    Stack: "Automation (Terraform, Ansible)",
    progressPercentage: "85",
  },
  {
    Stack: "Containerization & Orchestration (Docker, Kubernetes)",
    progressPercentage: "80",
  },
  {
    Stack: "CI/CD (Jenkins, GitHub Actions)",
    progressPercentage: "75",
  },
  {
    Stack: "Cloud Monitoring & Logging (CloudWatch)",
    progressPercentage: "70",
  },
  {
    Stack: "Networking (VPC, Load Balancers, NAT Gateways)",
    progressPercentage: "80",
  },
  {
    Stack: "Scripting (Python, Bash, Go)",
    progressPercentage: "85",
  },
  {
    Stack: "Linux Administration",
    progressPercentage: "90",
  },
  {
    Stack: "Problem Solving & Programming",
    progressPercentage: "85",
  },
];
export const educationInfo = [
  {
    schoolName: "DBATU University",
    subHeader: "Bachelor of Technology in Computer Science",
    duration: "July 2022 - March 2025",
    desc: "Studying core computer science subjects with a focus on cloud computing and infrastructure management.",
    grade: "In Progress",
    descBullets: [
      "Learning cloud computing, automation, and DevOps practices.",
      "Studied core subjects like Operating Systems, Computer Networks, and Database Management Systems.",
    ],
  },
  {
    schoolName: "MSBTE University",
    subHeader: "Diploma in Computer Science",
    duration: "June 2019 - June 2022",
    desc: "Focused on foundational computer science and programming principles.",
    grade: "Completed",
    descBullets: [
      "Gained hands-on experience with Linux systems, programming in Python, and basic networking.",
    ],
  },
];

export const experience = [
  {
    role: "Infrastructure Analyst III",
    company: "DXC Technology",
    companylogo: "/img/icons/common/dxc.png",
    date: "2022 – Present",
    desc: "Collaborated with project managers and architects to provision cloud infrastructure, ensuring alignment with project requirements and improving cloud operations.",
    descBullets: [
      "Provisioned and managed AWS infrastructure, ensuring high availability and scalability.",
      "Monitored and optimized cloud resources using AWS CloudWatch to maintain system health.",
     "Worked on resolving infrastructure issues and maintained cloud operations to meet SLAs.",
    ],
  },
  {
    role: "Cloud Intern",
    company: "Placify",
    companylogo: "/img/icons/common/placify.jpeg", // Change to the actual logo path
    date: "2021 – 2022",
    desc: "Worked on cloud infrastructure automation and deployment, contributing to scaling and optimizing cloud resources.",
    descBullets: [
      "Developed automation scripts to streamline cloud resource provisioning using AWS and Terraform.",
      "Assisted in managing cloud-based applications and ensuring scalability through Auto Scaling and Load Balancers.",
      "Collaborated with the team to improve the deployment processes using CI/CD pipelines.",
    ],
  },
];


export const projects = [
  {
    name: "Three-Tier Architecture Deployment on AWS",
    desc: "Deployed a scalable and secure three-tier architecture on AWS, consisting of web, application, and database layers. Utilized Elastic Load Balancers for traffic distribution, Auto Scaling for dynamic resource management, and RDS for managed database services. Implemented security best practices by isolating each tier in private and public subnets with proper security groups and IAM roles.",
    github: "https://github.com/snigdha/three-tier-architecture", // Change the URL to your GitHub if necessary
  },
  {
    name: "VPC Servers and Secure Application Deployment",
    desc: "Built a highly available VPC with multi-AZ applications using autoscaling and application load balancers on AWS. Secured the application by placing instances in private subnets and configuring a NAT Gateway for controlled internet access.",
    github: "https://github.com/snigdha/vpc-servers-deployment", // Change the URL to your GitHub if necessary
  },
  {
    name: "Highly Scalable WordPress Deployment on AWS",
    desc: "Deployed a scalable WordPress site on AWS using Elastic Load Balancer, Auto Scaling, and CloudFront CDN to ensure high availability and low latency. Optimized the infrastructure to handle increased traffic with automatic scaling.",
    github: "https://github.com/snigdha/wordpress-aws-deployment", // Change the URL to your GitHub if necessary
  },
  {
    name: "AWS Cloud Cost Optimization",
    desc: "Developed a Lambda function to identify and remove unused EBS snapshots, reducing storage costs by 15%. This project optimized AWS resource usage to minimize costs and ensure efficient cloud storage management.",
    github: "https://github.com/snigdha/aws-cost-optimization", // Change the URL to your GitHub if necessary
  },
  {
    name: "Dockerized Golang Calculator Application",
    desc: "Created a Golang-based calculator application using Docker multistage builds to minimize the Docker image size by 800x. This project focused on optimizing Docker images for efficient deployment.",
    github: "https://github.com/snigdha/docker-calculator", // Change the URL to your GitHub if necessary
  },
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Snigdha Chaudhari",
  description: "A passionate Cloud Engineer and DevOps Enthusiast.",
  author: "Snigdha Chaudhari",
  image: "https://avatars.githubusercontent.com/u/102229202?v=4",
  // url: "https://your-portfolio-url.com", // Replace with your portfolio URL if you have one
  keywords: [
    "Snigdha",
    "Snigdha Chaudhari",
    "Cloud Engineer",
    "DevOps",
    "Snigdha Portfolio",
    "Snigdha Chaudhari Portfolio",
  ],
};

