export async function getCat() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    if (!response.ok) throw new Error('Error while loading the Image');
    
    const data = await response.json();
    if (!data || data.length === 0) throw new Error('No image was found');

    return data[0];
}

export async function voteCat(catId: string, value: number) {
    const response = await fetch('https://api.thecatapi.com/v1/votes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'live_c6FCXYQE2sSWy8FGepel6rDxlrYqnPJChGVdf9plifeMmr0nTgQ2S4K7VWchWEsf'
        },
        body: JSON.stringify({
            image_id: catId,
            value: value
        })
    })
    if (!response.ok) throw new Error();
}