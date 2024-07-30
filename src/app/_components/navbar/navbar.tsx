export default function Navbar() {

    return (  
        <div className="flex gap-4 px-8 p-3">
            <div className="text-blue-600 text-sm underline underline-offset-8" data-testid="all">All</div>
            <div className="text-sm">For you</div>
            <div className="text-sm">Online</div>
            <div className="text-sm">Today</div>
            <div className="text-sm">This weekend</div>
            <div className="text-sm">Free</div>
            <div className="text-sm">Music</div>
            <div className="text-sm">Food & Drink</div>
            <div className="text-sm">Charity & Causes</div>
        </div>  
    )
}