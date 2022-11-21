import { IEpisode } from "../epsidesInterface";

function episodeCode(Episode: IEpisode): string {
    let episodeCodeResult = "S"
    if(Episode.season < 10) {
        episodeCodeResult += `0${Episode.season}`
    } else {
        episodeCodeResult += Episode.season
    }

    if(Episode.number < 10) {
        episodeCodeResult += `0${Episode.number}`
    } else {
        episodeCodeResult += Episode.number
    }

    

    return episodeCodeResult

}

export default episodeCode;