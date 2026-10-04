import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { AboutPage, CommunityPage, EcosystemPage, ExplorePage, LibraryPage, NotFoundPage, ProjectDetailPage, ProjectsPage, ResearchPage, SearchPage } from "./pages/CatalogPages";
function AppRouter() { return <WouterRouter base={import.meta.env.BASE_URL}><Switch><Route path="/" component={Home}/><Route path="/explore" component={ExplorePage}/><Route path="/projects" component={ProjectsPage}/><Route path="/projects/:slug" component={ProjectDetailPage}/><Route path="/research" component={ResearchPage}/><Route path="/library" component={LibraryPage}/><Route path="/ecosystem" component={EcosystemPage}/><Route path="/about" component={AboutPage}/><Route path="/community" component={CommunityPage}/><Route path="/search" component={SearchPage}/><Route component={NotFoundPage}/></Switch></WouterRouter>; }
export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster/><AppRouter/></TooltipProvider></ThemeProvider></ErrorBoundary>; }
