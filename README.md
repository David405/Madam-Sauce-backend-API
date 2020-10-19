The branch <b>Latest</b> has the most recent changes and should be the one to be tested.

All routes to be tested can be found in the index.js file

<b>localhost:4000</b> - Will get all Menu in the database

<b>localhost:4000/users/register</b> - Will create an User(admin) account         <i>Note: middleware enforced, cannot create another account once you are loggedin</i>

<b>localhost:4000/users/login</b> - Will login User(admin) account 

<b>localhost:4000/menu/store</b> - Will create a Menu              <i>Note: middleware enforced, cannot create a menu if user is not loggedin</i>

<b>localhost:4000/order/store/:id</b> - Will create an customer order         <i>Note: :id is the ObjectID of the Menu that has the order</i>

<b>localhost:4000/order/get</b> - Will get all Orders in the database

<b>localhost:4000/order/get/:id</b> - Will get Orders based on their parent Menu            <i>Note: :id is the ObjectID of the parent Menu</i>


<b>Feature branch has a working frontend design built with Edge template engine, the frontend on Main branch is broken</b>


