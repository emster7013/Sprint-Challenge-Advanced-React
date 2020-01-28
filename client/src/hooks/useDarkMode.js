import { useEffect } from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('true');

    useEffect(() => {
        if (someValue === true){
            return document.body.classList.add('dark-mode'); 
        }
       return document.body.classList.remove('dark-mode')
    }, [someValue]);

    return [someValue, setSomeValue];
}