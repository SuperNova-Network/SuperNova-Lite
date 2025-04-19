![SuperNova Lite]([static/image/supernova-lite.png](https://raw.githubusercontent.com/SuperNova-Network/SuperNova-Lite/refs/heads/main/static/images/SUPERNOVA-4-19-2025.png))
# SuperNova Lite

**SuperNova-Lite** is a lightweight and stripped-down version of the original [SuperNova-DY](https://github.com/SuperNova-Network/SuperNova-DY) project, developed by the SuperNova Network. This version is built for speed, simplicity, and ease of deployment. It does away with the built-in proxy used in SuperNova-DY, removes unnecessary complexity, and focuses on offering a minimal, fast, and efficient web-based experience.

SuperNova-Lite includes a collection of pre-implemented web games (not embedded from third-party sites), a clean user interface, and a straightforward user experience — ideal for lightweight hosting environments or personal use where simplicity and performance are a priority.

---

## Features

- **No Proxy System**  
  SuperNova-Lite does not include any proxy or bypass system. This makes the project faster to load, easier to deploy, and more secure in environments where external proxies are unnecessary or disallowed.

- **Built-in Games**  
  Unlike the original SuperNova-DY, which relied on iframe embeds or third-party links, this version includes several games natively implemented within the project. This provides faster load times, a more cohesive design, and better user control.

- **Clean and Minimal UI**  
  The interface has been redesigned to reflect a more basic structure while maintaining the signature space-themed aesthetic of the SuperNova brand.

- **No External Dependencies for Browsing**  
  Because this version does not depend on proxies or iframe embeds from other sites, it is fully self-contained and functions without any reliance on third-party web services.

- **Improved Performance**  
  By removing unnecessary features and external connections, SuperNova-Lite offers significantly faster load times and a smoother experience, even on lower-end devices or hosting platforms.

---

## Technologies Used

- **Node.js**  
  The project is built using Node.js for server-side functionality and asset management.

- **Express.js** (if used, you can remove this if you're not using it)  
  A fast and minimalist web framework for Node.js used to serve the front-end files and route game pages.

- **HTML, CSS, JavaScript**  
  Front-end technologies are used to build the interactive interface, page transitions, and dynamic elements.

---

## Requirements

To run SuperNova-Lite locally, you must have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- npm (comes bundled with Node.js)

---

## Installation and Setup

Follow these steps to install and run SuperNova-Lite on your local machine:

1. **Clone the repository**

   ```bash
   git clone https://github.com/SuperNova-Network/SuperNova-Lite.git
