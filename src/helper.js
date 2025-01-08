export function formatMormateMovieLength(length){
    const min = Number(length.split(" ").at(0));
    const hh = Math.round(min/60);
    const mm = min%60;
    return `${hh}h ${mm}m`;
    }
    