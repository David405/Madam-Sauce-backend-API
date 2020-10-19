## IMPORTANT!

All routes to be tested can be found in the index.js file<br/><br/>

**localhost:4000** - **GET** method
* Will get all Menu in the database<br/><br/><br/><br/><br/>


**localhost:4000/users/register** - **POST** method
* Will create an User(admin) account        
* *Note: middleware enforced, cannot create another account once you are loggedin*

**Parameters**
* username
* password<br/><br/><br/><br/>


**localhost:4000/users/login** - **POST** method
* Will login User(admin) account<br/><br/><br/><br/>


**localhost:4000/menu/store** - **POST** method
* Will create a Menu        
* *Note: middleware enforced, cannot create a menu if user is not loggedin*

**Parameters**
* title
* description
* price<br/><br/><br/><br/>


**localhost:4000/order/store/:id** - **POST** method
* Will create an customer order        
* *Note: :id is the ObjectID of the Menu that has the order*

**Parameters**
* name
* quantity
* address
* menu: ObjectID of parent menu<br/><br/><br/><br/>


**localhost:4000/order/get** - **GET** method
* Will get all Orders in the database<br/><br/><br/><br/>

**localhost:4000/order/get/:id** - **GET** method
* Will get Orders based on their parent Menu  
*Note: :id is the ObjectID of the parent Menu*<br/><br/><br/><br/>


**Feature branch has a working frontend design built with Edge template engine**


