const { UUID, UUIDV4, STRING, INET, INTEGER, FLOAT, BOOLEAN } = require('sequelize')
const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/react-router-practice-db')

const Products = conn.define('products', {
    id: {
        type: UUID, 
        defaultValue: UUIDV4,
        primaryKey: true 
    }, 
    name: {
        type: STRING, 
        allowNull: false, 
    }, 
    price: {
        type: FLOAT, 
        allowNull: false
    },
    description: {
        type: Sequelize.DataTypes.TEXT
    }, 
    image: {
        type: STRING
    },
    inCart: {
        type: BOOLEAN, 
        defaultValue: false
    }
})


const seed = async() => {
    await Promise.all([
        Products.create({ name: "SWIM TRUNKS - BLACK / IVORY", price: 550.00, description: "SHORTS MADE OF MEDIUM WEIGHT POLYESTER (JAPANESE IMPORT). MIDRISE. BUILT-IN MESH BREIFS. CONCEALED DRAWCORD AT ELASTICIZED WAISTBAND. LOGO EMBROIDERED AT FRONT. MADE IN THE USA.", image: 'BlackSwimTruncks.png' }),
        Products.create({ name: "SWIM TRUNKS - BLACK / IVORY", price: 550.00, description: "SHORTS MADE OF MEDIUM WEIGHT POLYESTER (JAPANESE IMPORT). MIDRISE. BUILT-IN MESH BREIFS. CONCEALED DRAWCORD AT ELASTICIZED WAISTBAND. LOGO EMBROIDERED AT FRONT. MADE IN THE USA.", image: 'BlackSwimTruncks.png' }),
        Products.create({ name: "CEDARS SINAI / FENCE FACE LS T-SHIRT - BLACK / WHITE", price: 740.00, description: "LONG SLEEVE T-SHIRT MADE OF MEDIUM WEIGHT DRY COTTON JERSEY. BOXY SHAPE WITH DROPPED SHOULDER. RIB KNIT NECKLINE AND CUFFS. SINGLE STITCH HEM AT WAIST. PRINTED ARTWORK AT FRONT AND BACK. VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'BlackFenceLongsleeveFront.png' }),
        Products.create({ name: "CEDARS SINAI NARCAN ANGEL T-SHIRT - IVORY / BLACK", price: 595.00, description: "SHORT SLEEVE T-SHIRT MADE OF PAPER THIN COTTON JERSEY. BOXY SHAPE. RIB KNIT NECKLINE. SINGLE STITCH HEM AT CUFF AND WAIST. PRINTED ARTWORK AT FRONT AND BACK. VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'CreamFenceCollageFront.png' }),
        Products.create({ name: "ERD (BRAND THAT COULD BE GOD) HOODIE - BURGUNDY / IVORY", price: 1275.00, description: "LONG SLEEVE PULLOVER HOODED SWEATSHIRT MADE OF HEAVY WEIGHT BRUSHED FRENCH TERRY. BAGGY, DROP-SHOULDER SHAPE. DOUBLE LAYER HOOD. KANGAROO POCKET. RIB KNIT CUFFS AND WAISTBAND. PRINTED ARTWORK AT FRONT AND SLEEVE. EMBROIDERED ARTWORK AT BACK. VINTAGE WASH PROCESS. MADE IN USA.", image: 'BurgundyBonkHoodieFrontFinal.png' }),
        Products.create({ name: "ERD (BRAND THAT COULD BE GOD) HOODIE - BLACK / IVORY", price: 1275.00, description: "LONG SLEEVE PULLOVER HOODED SWEATSHIRT MADE OF HEAVY WEIGHT BRUSHED FRENCH TERRY. BAGGY, DROP-SHOULDER SHAPE. DOUBLE LAYER HOOD. KANGAROO POCKET. RIB KNIT CUFFS AND WAISTBAND. PRINTED ARTWORK AT FRONT AND SLEEVE. EMBROIDERED ARTWORK AT BACK. VINTAGE WASH PROCESS. MADE IN USA.", image: 'BlackBonkHoodieFrontFinal.png' }),
        Products.create({ name: "CLASSIQUE LOGO L/S T-SHIRT - FADED BLACK / IVORY", price: 915.00, description: "LONG SLEEVE T-SHIRT MADE OF MEDIUM WEIGHT DRY COTTON JERSEY. BOXY SHAPE WITH DROPPED SHOULDER. RAW HEM AT CUFFS AND WAIST. PRINTED ARTWORK AT FRONT. HEAVY VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'CrackedLogoFugaziFront.png' }),
        Products.create({ name: "SICK OF IT ALL? TOTE BAG - BLACK / RED", price: 2100.00, description: "POLISHED COW LEATHER TOTE BAG. TWIN LEATHER CARRY HANDLES AT TOP. PRINTED ARTWORK AT FRONT AND BACK. ZIPPERED POCKET AT INTERIOR. NYLON LINING. MADE IN THE USA.", image: 'SickOfItAllToteFront.png' }),
        Products.create({ name: "APT LOGO TOTE BAG - BLACK / WHITE", price: 2100.00, description: "POLISHED COW LEATHER TOTE BAG. TWIN LEATHER CARRY HANDLES AT TOP. PRINTED ARTWORK AT FRONT AND BACK. ZIPPERED POCKET AT INTERIOR. NYLON LINING. MADE IN THE USA.", image: 'APTLogoToteBag.png' }),
        Products.create({ name: "HARNESS JEANS - CHARCOAL", price: 840.00, description: "STRAIGHT LEG JEANS MADE OF 12OZ COTTON CANVAS (JAPANESE IMPORT). MID-RISE. FIVE-POCKET STYLING. BUTTON FLY. BELT LOOPS AT WAISTBAND. DETACHABLE HARNESS AT OUTSEAM WITH PRESS-STUD FASTENING. CINCH TAB AT BACK WAISTBAND. SILVER CONTRAST ERD-BRANDED HARDWARE. VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'HarnessJeansFront.jpg' }),
        Products.create({ name: "PERFECT STRAIGHT LEG TROUSERS - AIR FORCE BLUE", price: 910.00, description: "STRAIGHT LEG TROUSERS WITH WELT POCKET AT FRONT AND BACK, D-RING TRIM AT FRONT AND BACK, BUTTON FLY, AND ERD LOGO TAB AT BACK POCKET. TAILORED INTERIOR CONSTRUCTION. MADE OF MEDIUM WEIGHT 270GSM COTTON CHINO TWILL (JAPANESE IMPORT). MADE IN THE USA.", image: 'DirtyCarpenter.jpg' }),
        Products.create({ name: "CARPENTER JEANS - BLACK", price: 790.00, description: "STRAIGHT LEG, CROPPED CARPENTER JEANS. MID-RISE. FIVE-POCKET STYLING. BUTTON FLY. BELT LOOPS AT WAISTBAND. PANEL AT FRONT LEGS. PATCH POCKETS AT OUTSEAM. CONTRAST LOGO PATCH AT BACK WAISTBAND. SILVER CONTRAST ERD-BRANDED HARDWARE. MADE IN THE USA.", image: 'BlackCarpenter.jpg' }),
        Products.create({ name: "BAGGY JEANS - FADED BLACK", price: 640.00, description: "BAGGY JEANS MADE OF 12OZ COTTON DENIM (JAPANESE IMPORT). MID-RISE. FIVE-POCKET STYLING. BUTTON FLY. BELT LOOPS AT WAISTBAND. CONTRAST LOGO PATCH AT BACK WAISTBAND. SILVER CONTRAST ERD-BRANDED HARDWARE. VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'BlackBaggyJeansFront.jpg' }),
        Products.create({ name: "BAGGY JEANS - FADED GRAY", price: 640.00, description: "BAGGY JEANS MADE OF 12OZ COTTON DENIM (JAPANESE IMPORT). MID-RISE. FIVE-POCKET STYLING. BUTTON FLY. BELT LOOPS AT WAISTBAND. CONTRAST LOGO PATCH AT BACK WAISTBAND. SILVER CONTRAST ERD-BRANDED HARDWARE. VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'GreyBaggyJeansFront.jpg' }),
        Products.create({ name: "KNIT SCRIBBLE LS TEE - WHITE / MULTI", price: 1700.00, description: "SHORT SLEEVE LIGHT WEIGHT KNIT LONGSLEEVE T-SHIRT MADE OF FINE MERINO WOOL WITH CONTRAST CASHMERE SLEEVES. INTARSIA KNIT ARTWORK AT FRONT AND BACK. MADE IN THE USA.", image: 'KnitScibbleFront.jpg' }),
        Products.create({ name: "DRAGON LS THERMAL - FADED BLACK", price: 515.00, description: "LONG SLEEVE T-SHIRT MADE OF MEDIUM WEIGHT COTTON/MODAL BLEND THERMAL. FITTED SHAPE. RIB KNIT NECKLINE AND CUFFS. RAW HEM. PRINTED ARTWORK AT FRONT AND SLEEVES. VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'DragonLSFront.jpg' }),
        Products.create({ name: "HOODED TRACK JACKET - SLATE / BLACK", price: 1900.00, description: "BOXY HOODED PULLOVER TRACK JACKET MADE OF VISCOSE NYLON-BLEND VINTAGE FLIGHT SATIN (JAPANESE IMPORT). QUARTER-ZIP CLOSURE WITH ERD-BRANDED RIRI HARDWARE, KANGAROO POCKET, AND ELASTICATED CUFFS/WAISTBAND. TONAL MESH LINING (JAPANESE IMPORT). EMBROIDERED ARTWORK AT FRONT AND BACK. MADE IN THE USA.", image: 'HoodedTrackJacket.jpg' }),
        Products.create({ name: "HOODED TRACK JACKET - BLACK / WHITE", price: 1900.00, description: "BOXY HOODED PULLOVER TRACK JACKET MADE OF VISCOSE NYLON-BLEND VINTAGE FLIGHT SATIN (JAPANESE IMPORT). QUARTER-ZIP CLOSURE WITH ERD-BRANDED RIRI HARDWARE, KANGAROO POCKET, AND ELASTICATED CUFFS/WAISTBAND. TONAL MESH LINING (JAPANESE IMPORT). EMBROIDERED ARTWORK AT FRONT AND BACK. MADE IN THE USA.", image: 'HoodedTrackJacketBlack.jpg' }),
        Products.create({ name: "TRACK PANTS - BLACK / WHITE", price: 890.00, description: "STRAIGHT LEG TRACK PANTS MADE OF LIGHT WEIGHT VISCOSE AND NYLON BLEND VINTAGE SATIN (JAPANESE IMPORT). FOUR-POCKET STYLING WITH ERD-BRANDED RIRI ZIP CLOSURE. CONCEALED DRAWCORD AT ELASTICIZED WAISTBAND. ADJUSTABLE ZIP GUSSET AT CUFF OUTSEAM. TONAL MESH LINING. CONTRAST EMBROIDERED ARTWORK AT KNEE. MADE IN THE USA.", image: 'BlackTrackPantsFront.jpg' }),
        Products.create({ name: "TRACK PANTS - CHOCOLATE / BLACK", price: 890.00, description: "STRAIGHT LEG TRACK PANTS MADE OF LIGHT WEIGHT VISCOSE AND NYLON BLEND VINTAGE SATIN (JAPANESE IMPORT). FOUR-POCKET STYLING WITH ERD-BRANDED RIRI ZIP CLOSURE. CONCEALED DRAWCORD AT ELASTICIZED WAISTBAND. ADJUSTABLE ZIP GUSSET AT CUFF OUTSEAM. TONAL MESH LINING. CONTRAST EMBROIDERED ARTWORK AT KNEE. MADE IN THE USA.", image: 'BrownTrackPants.jpg' }),
        Products.create({ name: "LA MOUCHE PRINT SHORT SLEEVE SHIRT - WHITE / MULTI", price: 980.00, description: "SHORT SLEEVE SHIRT MADE OF LIGHT WEIGHT CUPRO TWILL (JAPANESE IMPORT). ONE-PIECE SPREAD COLLAR. BUTTON-FRONT CLOSURE. ROLLED CUFFS. BOX PLEAT AT BACK YOKE. MOTHER OF PEARL BUTTONS. PRINTED ARTWORK THROUGHOUT. MADE IN THE USA.", image: 'LAMouche.jpg' }),
        Products.create({ name: "WESTERN EMBROIDERY SHORT SLEEVE SHIRT - BLACK / IVORY", price: 1100.00, description: "SHORT SLEEVE SHIRT MADE OF LIGHT WEIGHT WASHED CUPRO TWILL (JAPANESE IMPORT). ONE-PIECE SPREAD COLLAR. BUTTON-FRONT CLOSURE. ROLLED CUFFS. BOX PLEAT AT BACK YOKE. MOTHER OF PEARL BUTTONS. EMBROIDERED ARTWORK AT FRONT. MADE IN THE USA.", image: 'WesternEmbroideryShortSleeve.jpg' }),
        Products.create({ name: "ROSE PRINT SHIRT - CHARCOAL / MULTI", price: 1050.00, description: "LONG SLEEVE SHIRT MADE OF LIGHT WEIGHT SILK CHIFFON. ONE-PIECE SPREAD COLLAR. BUTTON-FRONT CLOSURE. SINGLE-BUTTON BARREL CUFFS. VENT AT SIDE SEAMS. MOTHER OF PEARL BUTTONS. PRINTED ARTWORK THROUGHOUT. MADE IN THE USA.", image: 'RosePrintShirt.jpg' }),
        Products.create({ name: "SCAN REJECT LS T-SHIRT - FADED BLACK / MULTI", price: 740.00, description: "LONG SLEEVE T-SHIRT MADE OF MEDIUM WEIGHT DRY COTTON JERSEY. BOXY SHAPE WITH DROPPED SHOULDER. RIB KNIT NECKLINE AND CUFFS. SINGLE STITCH HEM AT WAIST. PRINTED ARTWORK AT FRONT AND SLEEVES. VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'ScanReject.jpg' }),
        Products.create({ name: "GIRL TORN CREWNECK - BLUE / MULTI", price: 930.00, description: "LONG SLEEVE CREWNECK SWEATSHIRT MADE OF ULTRA-HEAVY WEIGHT 480GSM BRUSHED FRENCH TERRY. BOXY, OVERSIZED SHAPE. RIB KNIT CUFFS AND WAISTBAND. PRINTED ARTWORK AT FRONT. VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'BlueBrokenCrewneck.jpg' }),
        Products.create({ name: "NEGLECT ERD T-SHIRT - FADED BLACK / WHITE", price: 615.00, description: "SHORT SLEEVE T-SHIRT MADE OF MEDIUM WEIGHT DRY COTTON JERSEY. BOXY SHAPE. RIB KNIT NECKLINE. SINGLE STITCH HEM AT CUFF AND WAIST. PRINTED ARTWORK AT FRONT. HEAVY VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'NeglectTee.jpg' }),
        Products.create({ name: "SUCK MESH LS T-SHIRT - ACID YELLOW / MULTI", price: 715.00, description: "LONG SLEEVE T-SHIRT MADE OF LIGHT WEIGHT ENGLISH NETTING. FITTED SHAPE. BINDING NECKLINE. OVEREDGE HEM AT CUFF AND WAIST. PRINTED ARTWORK AT FRONT. MADE IN THE USA.", image: 'YellowSuckMesh.jpg' }),
        Products.create({ name: "SUCK MESH LS T-SHIRT - HEX BLUE / MULTI", price: 715.00, description: "LONG SLEEVE T-SHIRT MADE OF LIGHT WEIGHT ENGLISH NETTING. FITTED SHAPE. BINDING NECKLINE. OVEREDGE HEM AT CUFF AND WAIST. PRINTED ARTWORK AT FRONT. MADE IN THE USA.", image: 'BlueSuckMeshFr.jpg' }),
        Products.create({ name: "PIN COLLAGE 6-PANEL CAP - BLACK / MULTI", price: 610.00, description: "UNSTRUCTURED 6-PANEL BASEBALL CAP MADE OF HEAVY WEIGHT COTTON CANVAS (JAPANESE IMPORT). DISTRESSED PINBACK BUTTONS THROUGHOUT. MADE IN THE USA.", image: 'PinHat.jpg' }),
        Products.create({ name: "APT LOGO 6-PANEL CAP - SLATE / IVORY", price: 610.00, description: "UNSTRUCTURED 6-PANEL BASEBALL CAP MADE OF HEAVY WEIGHT COTTON CANVAS (JAPANESE IMPORT). DISTRESSED PINBACK BUTTONS THROUGHOUT. MADE IN THE USA.", image: 'SlateHat.jpg' }),
        Products.create({ name: "APT LOGO 6-PANEL CAP - BLACK / IVORY", price: 610.00, description: "UNSTRUCTURED 6-PANEL BASEBALL CAP MADE OF HEAVY WEIGHT COTTON CANVAS (JAPANESE IMPORT). DISTRESSED PINBACK BUTTONS THROUGHOUT. MADE IN THE USA.", image: 'BlackHat.jpg' }),
        Products.create({ name: "APT LOGO 6-PANEL CAP - CHOCOLATE / BLACK", price: 610.00, description: "UNSTRUCTURED 6-PANEL BASEBALL CAP MADE OF HEAVY WEIGHT COTTON CANVAS (JAPANESE IMPORT). DISTRESSED PINBACK BUTTONS THROUGHOUT. MADE IN THE USA.", image: 'BrownHatFront.jpg' }),
        Products.create({ name: "SICK OF IT ALL? T-SHIRT - FADED BLACK / RED", price: 1015.00, description: "SHORT SLEEVE T-SHIRT MADE OF PAPER THIN COTTON JERSEY. BOXY SHAPE. RIB KNIT NECKLINE. SINGLE STITCH HEM AT CUFF AND WAIST. PRINTED ARTWORK AT FRONT AND BACK. HEAVY VINTAGE WASH PROCESS. DISTRESSING THROUGHOUT. MADE IN THE USA.", image: 'SickOfItAll.jpg' }),
        Products.create({ name: "LUST T-SHIRT - IVORY / PINK", price: 615.00, description: "SHORT SLEEVE T-SHIRT MADE OF PAPER THIN COTTON JERSEY. BOXY SHAPE. RIB KNIT NECKLINE. SINGLE STITCH HEM AT CUFF AND WAIST. PRINTED ARTWORK AT FRONT AND BACK. HEAVY VINTAGE WASH PROCESS. DISTRESSING THROUGHOUT. MADE IN THE USA.", image: 'Lust.jpg' }),
        Products.create({ name: "APT MOCK NECK T-SHIRT - BLACK / WHITE", price: 415.00, description: "RAGLAN SHORT SLEEVE MOCK NECK T-SHIRT MADE OF MEDIUM WEIGHT BABY RIB. FITTED “BABY TEE” SHAPE. SINGLE STITCH HEM AT CUFF. OVEREDGE HEM AT WAIST. PRINTED ARTWORK AT FRONT. MADE IN THE USA.", image: 'APTMOCK.jpg' }),
        Products.create({ name: "ZURICH GRID LS T-SHIRT - WHITE / MULTI", price: 740.00, description: "LONG SLEEVE T-SHIRT MADE OF MEDIUM WEIGHT DRY COTTON JERSEY. BOXY SHAPE WITH DROPPED SHOULDER. RIB KNIT NECKLINE AND CUFFS. SINGLE STITCH HEM AT WAIST. PRINTED ARTWORK AT FRONT. VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'Zurich.jpg' }),
        Products.create({ name: "COLLAGE TROUSERS - BURGUNDY / RED", price: 1275.00, description: "STRAIGHT LEG TROUSERS MADE OF 11OZ COTTON SATIN BACK TWILL (JAPANESE IMPORT). MID-RISE. FOUR-POCKET STYLING. BELT LOOPS AT WAISTBAND. TONAL D-RING HARDWARE AT FRONT AND BACK OUTSEAM. TAILORED INTERIOR WAISTBAND CONSTRUCTION. PRINTED ARTWORK THROUGHOUT. MADE IN THE USA.", image: 'CollageTrousers.jpg' }),
        Products.create({ name: "COLLAGE TROUSERS - BLACK / WHITE", price: 1275.00, description: "STRAIGHT LEG TROUSERS MADE OF 11OZ COTTON SATIN BACK TWILL (JAPANESE IMPORT). MID-RISE. FOUR-POCKET STYLING. BELT LOOPS AT WAISTBAND. TONAL D-RING HARDWARE AT FRONT AND BACK OUTSEAM. TAILORED INTERIOR WAISTBAND CONSTRUCTION. PRINTED ARTWORK THROUGHOUT. MADE IN THE USA.", image: 'CollageTrousersBlack.jpg' }),
        Products.create({ name: "PERFECT STRAIGHT LEG TROUSER - GREY", price: 940.00, description: "STRAIGHT LEG TROUSERS MADE OF 11OZ COTTON SATIN BACK TWILL (JAPANESE IMPORT). MID-RISE. FOUR-POCKET STYLING. BELT LOOPS AT WAISTBAND. TONAL D-RING HARDWARE AT FRONT AND BACK OUTSEAM. TAILORED INTERIOR WAISTBAND CONSTRUCTION. PRINTED ARTWORK THROUGHOUT. MADE IN THE USA.", image: 'PerfectStraight.jpg' }),
        Products.create({ name: "EMBROIDERY SHORTS - BLACK / BLACK", price: 915.00, description: "SHORTS MADE OF MEDIUM WEIGHT COTTON ACRYLIC-BLEND TONAL STRIPE JACQUARD (JAPANESE IMPORT). THREE-POCKET STYLING. MIDRISE. CONCEALED DRAWCORD AT ELASTICIZED WAISTBAND. ARTWORK EMBROIDERED AT FRONT. MADE IN THE USA.", image: 'EmbroideryShorts.jpg' }),
        Products.create({ name: "EMBROIDERY SHORTS - BEIGE / RED", price: 915.00, description: "SHORTS MADE OF MEDIUM WEIGHT COTTON ACRYLIC-BLEND TONAL STRIPE JACQUARD (JAPANESE IMPORT). THREE-POCKET STYLING. MIDRISE. CONCEALED DRAWCORD AT ELASTICIZED WAISTBAND. ARTWORK EMBROIDERED AT FRONT. MADE IN THE USA.", image: 'EnbroideryShortsBeige.jpg' }),
        Products.create({ name: "FITTED LOGO LONGSLEEVE - BLACK", price: 270.00, description: "FITTED SHAPE WITH SCOOP NECK AND BASEBALL HEM. LIGHT WEIGHT RIB FABRIC. E.R.D. MONOGRAM LOGO EMBROIDERY. VINTAGE WASH PROCESS. MADE IN THE USA.", image: 'FittedLogo.png' }),
        Products.create({ name: "SAFETY PIN EARRING", price: 310.00, description: "SINGLE SAFETY PIN EARRING. ANTIQUED STERLING SILVER. MADE IN THE USA.", image: 'SafetyPinEarring.jpg' }),
        Products.create({ name: "SAFETY PIN EARRING", price: 310.00, description: "SINGLE SAFETY PIN EARRING. ANTIQUED STERLING SILVER. MADE IN THE USA.", image: 'SafetyPinEarring.jpg' }),
    ]) 
}

module.exports = {
    conn, 
    seed, 
    Products
}