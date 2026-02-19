import { useLightStore } from "./use-light-store"

export function LightToggle() {
    const {isOpen, toggle} = useLightStore()

    return (
        <div>
            <button onClick={toggle}>Toggle</button>

            <p>{isOpen ? 'Lumina este aprinsa' : 'Lumina este stinsa'}</p> 
        </div>
    )
}