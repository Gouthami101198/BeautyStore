import "./EmptyState.css";

function EmptyState({

    title="Nothing Here",

    message="No items found."

}){

    return(

        <div className="empty-state">

            <img
            src="/images/empty.png"
            alt="Empty"
            />

            <h2>{title}</h2>

            <p>{message}</p>

        </div>

    );

}

export default EmptyState;