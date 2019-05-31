module.exports = function main(inputs) {
    // write your code here...
    var distanceCost = 0;
    var parkCost = inputs.parkTime * 0.25;
    var totalCost = 0;
    if(inputs.distance <= 2){
        distanceCost = 6;
    }else if(inputs.distance <= 8){
        distanceCost = 6 + (inputs.distance - 2) * 0.8;
    }else{
        distanceCost = 6 + 6 * 0.8 + (inputs.distance - 8) * 0.8 * 1.5;
    }

    totalCost = Math.round(distanceCost + parkCost);

    return totalCost;
};
