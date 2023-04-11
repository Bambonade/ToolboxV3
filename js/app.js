const app = Vue.createApp({
    data() {
        let tools = [
            new Tool('1/4" METRIC Socket Set', 'Socket'),
            new Tool('1/4" SAE Socket Set', 'Socket'),
            new Tool('3/8" METRIC Socket Set', 'Socket'),
            new Tool('3/8" SAE Socket Set', 'Socket'),
            new Tool('1/4" Ratchet', 'Ratchet'),
            new Tool('3/8" Ratchet', 'Ratchet'),
            new Tool('1/2" Ratchet', 'Ratchet'),
            new Tool('Milwaukee Ratchet', 'PowerTool'),
            new Tool('123 Piece Bit Set', 'Bit'),
            new Tool('12 Piece Metric Wrench Set'),
            new Tool('Torx/Alan Socket Set', 'Torx'),
            new Tool('3/8" MAC Air Ratchet', 'Pneumatic'),
            new Tool('Cornwell Orbital Sander (DA)', 'Pneumatic'),
            new Tool('10 Piece Screw Driver Set', 'ScrewDriver'),
            new Tool('Milwaukee 5 Piece Locking Pliers', 'Pliers'),
            new Tool('Cornwell 5 Piece Pliers Set', 'Pliers'),
            new Tool('Electrical Tape', 'Electrical'),
            new Tool('Wire Stripper', 'Electrical'),
            new Tool('Milwaukee Impact Driver', 'PowerTool'),
            new Tool('Milwaukee 1/4" Ratchet', 'PowerTool'),
            new Tool('DeWalt Drill', 'PowerTool'),
            new Tool('DeWalt Angle Grinder', 'PowerTool'),
            new Tool('DeWalt Impact Driver', 'PowerTool'),
        ]
        return {
            tools: tools
        }
    },
})