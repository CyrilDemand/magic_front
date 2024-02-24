export const handleRang = (character) => {
    // Implémenter la logique pour calculer le rang par rapport à la quantité de mana
    /*
        G-  (1 à 100 PM)
        G   (101 à 250 PM)
        G+ (251 à 500 PM)
        F-  (501 à 1000 PM)
        F   (1001 à 1500 PM)
        F+ (1501 à 2000 PM)
        E-  (2001 à 3000 PM)
        E   (3001 à 4000 PM)
        E+ (4001 à 5000 PM)
        D-  (5001 à 10000 PM)
        D   (10001 à 15000 PM)
        D+ (15001 à 20000 PM)
        C-  (20001 à 30000 PM)
        C   (30001 à 40000 PM)
        C+ (40001 à 50000 PM)
        B-  (50001 à 60000 PM)
        B   (60001 à 75000 PM)
        B+ (75001 à 100000 PM)
        A-  (100000 à 250000 PM)
        A   (250001 à 500000 PM)
        A+ (500001 à 1000000 PM)
        S   (1000001 à 10000000 PM)
        SS (10000001 à 100000000 PM)
        SSS  (100000001 à 250000000 PM)
        SU     (250000001 à 750000000 PM)
        U   (+750000001 PM)
     */
    if (character.quantiteMana >= 1 && character.quantiteMana <= 100) {
        return 'G-';
    } else if (character.quantiteMana >= 101 && character.quantiteMana <= 250) {
        return 'G';
    } else if (character.quantiteMana >= 251 && character.quantiteMana <= 500) {
        return 'G+';
    } else if (character.quantiteMana >= 501 && character.quantiteMana <= 1000) {
        return 'F-';
    } else if (character.quantiteMana >= 1001 && character.quantiteMana <= 1500) {
        return 'F';
    } else if (character.quantiteMana >= 1501 && character.quantiteMana <= 2000) {
        return 'F+';
    } else if (character.quantiteMana >= 2001 && character.quantiteMana <= 3000) {
        return 'E-';
    } else if (character.quantiteMana >= 3001 && character.quantiteMana <= 4000) {
        return 'E';
    } else if (character.quantiteMana >= 4001 && character.quantiteMana <= 5000) {
        return 'E+';
    } else if (character.quantiteMana >= 5001 && character.quantiteMana <= 10000) {
        return 'D-';
    } else if (character.quantiteMana >= 10001 && character.quantiteMana <= 15000) {
        return 'D';
    } else if (character.quantiteMana >= 15001 && character.quantiteMana <= 20000) {
        return 'D+';
    } else if (character.quantiteMana >= 20001 && character.quantiteMana <= 30000) {
        return 'C-';
    } else if (character.quantiteMana >= 30001 && character.quantiteMana <= 40000) {
        return 'C';
    } else if (character.quantiteMana >= 40001 && character.quantiteMana <= 50000) {
        return 'C+';
    } else if (character.quantiteMana >= 50001 && character.quantiteMana <= 60000) {
        return 'B-';
    } else if (character.quantiteMana >= 60001 && character.quantiteMana <= 75000) {
        return 'B';
    } else if (character.quantiteMana >= 75001 && character.quantiteMana <= 100000) {
        return 'B+';
    } else if (character.quantiteMana >= 100001 && character.quantiteMana <= 250000) {
        return 'A-';
    } else if (character.quantiteMana >= 250001 && character.quantiteMana <= 500000) {
        return 'A';
    } else if (character.quantiteMana >= 500001 && character.quantiteMana <= 1000000) {
        return 'A+';
    } else if (character.quantiteMana >= 1000001 && character.quantiteMana <= 10000000) {
        return 'S';
    } else if (character.quantiteMana >= 10000001 && character.quantiteMana <= 100000000) {
        return 'SS';
    } else if (character.quantiteMana >= 100000001 && character.quantiteMana <= 250000000) {
        return 'SSS';
    } else if (character.quantiteMana >= 250000001 && character.quantiteMana <= 750000000) {
        return 'SU';
    } else if (character.quantiteMana >= 750000001) {
        return 'U';
    }

}