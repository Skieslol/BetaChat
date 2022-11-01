import { useSearchParams } from "react-router-dom";
import { GuildChannelStyle } from "../styles/styles";

export const GuildChannel = () => {

    console.log(useSearchParams());

    return (
        <GuildChannelStyle>
            Guild Channel
        </GuildChannelStyle>
    );
}