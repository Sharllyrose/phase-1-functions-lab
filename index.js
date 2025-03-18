// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    const headquarters = 42;
    
    return Math.abs(headquarters - blocks);
}

function distanceFromHqInFeet(blocks){
    const feet = distanceFromHqInBlocks(blocks);
    return feet * 264;
}

function distanceTravelledInFeet(start, end){
    /**     1 block is 264 feet long            */
    return Math.abs(start - end)*264;
}

function calculatesFarePrice(start, end){
    /**     in terms of feet ni mbali aje            */
    const distance = distanceTravelledInFeet(start, end);
    
    /**     if less than 400 feet            */
    if (distance <=400){
        return 0; /*    free    */

        /**     if more than 400 feet  lakini si 2000          */
    } else if (distance >400 && distance <=2000){
        return (distance-400)*0.02;
        /**     2% of the distance          */
    } else if (distance >200 && distance <=2500){
        /**     basi ni 25 bob         */
        return 25;
        /**    Hatuwezi enda huko kote        */
    }else if (distance >2500) {
        return 'cannot travel that far'
    }
}
