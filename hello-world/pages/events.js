import { useState } from "react";
import { useRouter } from "next/router";

function EventList({ eventList }) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter();

    const fetchSportsEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json();
        setEvents(data);
        router.push('/events?category=sports', undefined, { shallow: true })
    }

    return (
        <>
            <button onClick={fetchSportsEvents}>sports Events</button>
            {events.map((event) => (
                <div key={event._id}>
                    <h2>
                        {event.id} {event.title} {event.date} | {event.category}
                    </h2>
                    <p>{event.description}</p>
                    <hr />
                </div>
            ))}
        </>
    )
}

export default EventList;

export async function getServerSideProps(context) {
    // console.log("Context", context);
    const { query } = context;
    const { category } = context;
    const queryString = category ? 'category=sports' : ''
    
        const res = await fetch(`http://localhost:4000/events?${queryString}`)
        const events = await res.json();
        if (!events.length) {
            return {
                notFound: true,
            };
        }
        return {
            props: {
                eventList: events
            }
        }
}