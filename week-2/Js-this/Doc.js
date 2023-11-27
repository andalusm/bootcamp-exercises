// const person = {
//     username: "Felicia",
//     introduce: function(){
//       console.log("Hi, I'm Felicia")
//     }
//   }
  
//   person.introduce() //prints "Hi, I'm Felicia"

// const counter = {
//     count: 0,
  
//     updateCounter: function () {
//       this.count += 1;
//     }
//   };
  
//   counter.updateCounter();
//   counter.updateCounter();
//   counter.updateCounter();
  
//   console.log(counter.count);
  
// const person = {
//     hungry: true,
  
//     feed: function () {
//       if (this.hungry) {
//         this.hungry = false;
//         console.log('Im no longer hungry!')
//       }
//     }
//   }  
  
//   person.feed() //should alert "I'm no longer hungry"


//   const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
//   };
  
//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };
  
//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  
// const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };
  
//   const airplane = {
//     fuel:0,
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }
//   };
  
//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());

// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function(coins) {
//         this.coinCount -= coins;
        
//     }
//   };
  
//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);
// const revealSecret = function () {
//     return this.secret;
//   };
  
//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     console.log(person.name + " said: " + result);
//   };
  
//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   };
  
//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };
  
//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);

const coffeeShop = {
    beans: 60,
    money:50,
  
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 5},
      americano: {beanRequirement: 5, price: 4},
      doubleShot: {beanRequirement: 15, price: 10},
      frenchPress: {beanRequirement: 12, price: 7}
    },
    buyBeans : function(numBeans){
        this.beans += numBeans;
        console.log("Bought "+numBeans + " Beans!")
        this.money -= numBeans*2;
    },
    buyDrink: function(drinkType){
        if(this.drinkRequirements[drinkType])
        {
            this.money += this.drinkRequirements[drinkType].price;
        }
        this.buyDrink(drinkType);

                
    },
  
    makeDrink: function (drinkType) {
      if(this.drinkRequirements[drinkType] && this.beans >= this.drinkRequirements[drinkType].beanRequirement)
      {
            this.beans -= this.drinkRequirements[drinkType]
            console.log(drinkType);
       
      }
      else if(this.drinkRequirements[drinkType])
      {
        console.log("Sorry, we\'re all out of beans!");
      }
      else{
        console.log("Sorry, we don\'t make "+ drinkType);

      }
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  coffeeShop.buyBeans(12);
  coffeeShop.makeDrink("frenchPress"); 
  console.log(coffeeShop.money)

  