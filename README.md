# Project Name

MyWallet - E-Wallet service

## 🔧 Functions

### Function 01: Person
- Registration
- Search by term
- Search by id

### Function 02: Wallet
- Create 
- Deposit
- Withdraw
- Transfer
- Balance
- Statement

## Dependencies 

[![Docker](https://img.shields.io/badge/Docker-0395bf?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

# Run Project

If you just want to run the project, just download the [Dockerfile](Dockerfile) and run the commands below in the folder where the Dockerfile is:

1. Build project image 

    ```
	docker build -t any_name_you_want --build-arg react_app_front_name=Project_name_is_show_in_navbar --build-arg react_app_api_url=your_back_end_url .
    ``` 

2. Run docker image

    ```
	sudo docker run -it --rm -p any_port_you_want:8801 name_you_chose_in_build-t
    ``` 

## Made with:
[![UBUNTU](https://img.shields.io/badge/Ubuntu-e95420?style=for-the-badge&logo=ubuntu&logoColor=white)](https://ubuntu.com/download)
[![REACTJS](https://img.shields.io/badge/React%20JS-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![NODE](https://img.shields.io/badge/Node-8cbf3d?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en//)
[![VSCODE](https://img.shields.io/badge/VS%20Code-00a6ec?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)


## 🔖 License
[![LICENSE](https://img.shields.io/badge/Custom_GPL_3.0-E58080?style=for-the-badge&logo=bookstack&logoColor=white)](/LICENSE)

### Support or contact

[![GITHUB](https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dmarlon/)
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marlon-dauernheimer-55278073/)

### Reference Documentation
To additional references, consider the following sections:

* [React.JS documentation](https://reactjs.org/docs/getting-started.html)
* [Node documentation](https://nodejs.org/en/docs/)
* [NPM documentation](https://docs.npmjs.com/)
* [NPM packge](https://www.npmjs.com/package)
* [Docker documentation](https://docs.docker.com/get-started/overview/)

