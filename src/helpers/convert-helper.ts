//method static: 

export abstract class ConvertHelper {
    public static weight(baseUnit: string, targetUnit: string, value: number): number {
        const myBaseUnit : string = baseUnit.toLowerCase();
        const myTargetUnit: string = targetUnit.toLowerCase();

        if (myBaseUnit == myTargetUnit) {
            return value;
        } else {
            if (myBaseUnit == 'kg') {
                if (myTargetUnit == 'g') {
                    return value / 1000;
                } else {
                    if (myTargetUnit == 'mg') {
                        return value / (1000*1000);
                    }
                }
            } else {
                if (myBaseUnit == 'g') {
                    if (myTargetUnit == 'mg') {
                        return value / 1000;
                    } else {
                        if (myTargetUnit == 'kg') {
                            return value * 1000
                        }

                    }
                }
            }  
            if (myBaseUnit == 'l'){
                if (myTargetUnit == 'cl') {
                    return value/100;
                }else{
                    if (myTargetUnit == 'ml'){
                        return value /1000
                    }
                }
            } 
        }
    }
}
// = opérateur d'affectation 
// == opérateur de comparaison de valeur
// === operateur de comparaison de valeur + comparaison de type boolean string etc
