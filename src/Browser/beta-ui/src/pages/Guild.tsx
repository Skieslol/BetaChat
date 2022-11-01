import { Outlet, useSearchParams } from "react-router-dom";
import { GuildPanel } from "../components/guilds/GuildPanel";
import { GuildSidebar } from "../components/guilds/GuildSidebar";
import { Page } from "../styles/styles";

export const Guild = () => {
    return (
        <Page>
            <GuildSidebar /> 
            <GuildPanel />  
            <Outlet />     
        </Page>
    );
}