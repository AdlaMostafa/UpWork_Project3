import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import medalia from '../../public/assets/SocialMedia/medalia.jpg';
import wood from '../../public/assets/SocialMedia/wood.jpg';
import man from '../../public/assets/SocialMedia/man.jpg';
interface HelpItem{
    id:number;
    title: string;
    about:string;
    icon:typeof ArrowForwardIcon ;
    image:string;
}

export const helpData:HelpItem[] = [
    {
       id:1,
      title:"Important a certification",
      about:"Showing a credential may increase your chances of earning by 4 times",
      icon:ArrowForwardIcon,
      image:'../../public/assets/SocialMedia/medalia.jpg',
    },{
        id:2,
        title:"Build your portfolio",
        about:"Adding a project may increase your chances of earning by 8 times",
        icon:ArrowForwardIcon,
      image:'../../public/assets/SocialMedia/wood.jpg'
    },{
        id:3,
        title:"Get tips to find work",
        about:"Learn how to optimize search use Connects , and more to land your first job.",
        icon:ArrowForwardIcon,
        image:'../../public/assets/SocialMedia/man.jpg'
    }
]