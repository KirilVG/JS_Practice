function solve(){

    let res={};

    res["mage"]=function(name){

        let mage={};

        mage["name"]=name;

        mage["mana"]=100;

        mage["health"]=100;

        mage["cast"]=function(spell){
            this["mana"]--;

            console.log(`${this["name"]} cast ${spell}`);
        }
        return mage;
    }

    res["fighter"]=function(name){

        let fighter={};

        fighter["name"]=name;

        fighter["stamina"]=100;

        fighter["health"]=100;

        fighter["fight"]=function(){
            this["stamina"]--;

            console.log(`${this["name"]} slashes at the foe!`);
        }

        return fighter;
    }
    return res;
}

let create = solve();

const scorcher = create.mage("Scorcher");

scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");

scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
