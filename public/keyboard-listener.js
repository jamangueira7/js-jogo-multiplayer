export default function createkeyboardListener(document) {

    const state = {
        observers: [],
        playerId: null
    }

    function registerPlayerId(playerId) {
        state.playerId = playerId;
    }

    function subscribe(obeserveFunction) {
        state.observers.push(obeserveFunction);
    }

    function notifyAll(command) {
        console.log(`keyboardListener -> Notifying ${state.observers.length} observers`);

        for (const observerFunction of state.observers) {
            observerFunction(command);
        }
    }

    document.addEventListener('keydown', handleKeydonw);

    function handleKeydonw(event){
        const keyPressed = event.key;

        const command = {
            type: 'move-player',
            playerId: state.playerId,
            keyPressed
        }

        notifyAll(command);
    }

    return {
        subscribe,
        registerPlayerId
    }
}
