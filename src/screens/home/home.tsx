import { StatusBox } from '../../components/status-box/status-box.component';
import { useAppSelector } from '../../shared/store';

export function Home() {
    const user = useAppSelector((state) => state.user);

    return (
        <StatusBox
            agility={1}
            intelligence={1}
            job="None"
            level={1}
            perception={1}
            strength={1}
            title="title"
            vitality={1}
        />
    );
}
