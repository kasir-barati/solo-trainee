import { Image, View } from 'react-native';
import agilityIcon from '../../assets/agility.svg';
import perceptionIcon from '../../assets/awareness.svg';
import intelligenceIcon from '../../assets/intelligence.svg';
import strengthIcon from '../../assets/strength.svg';
import vitalityIcon from '../../assets/vitality.svg';
import { Text } from '../text/text.component';

export function StatusBox({
    level,
    job,
    title,
    agility,
    intelligence,
    perception,
    strength,
    vitality,
}: Readonly<QuestProps>) {
    return (
        <View className="flex">
            <Text className="border border-gray-500 py-3 uppercase">
                Status
            </Text>
            <View>
                <View>
                    <Text>{level}</Text>
                    <Text className="uppercase">Level</Text>
                </View>
                <View>
                    <Text>JOB: {job}</Text>
                    <Text>TITLE: {title}</Text>
                </View>
            </View>
            <View className="">
                <View>
                    <View>
                        <Image
                            className="bg-white"
                            source={strengthIcon}
                        />
                        <Text accessibilityHint="Strength">
                            STR: {strength}
                        </Text>
                    </View>
                    <View>
                        <Image source={agilityIcon} />
                        <Text accessibilityHint="Agility">
                            AGI: {agility}
                        </Text>
                    </View>
                    <View>
                        <Image source={perceptionIcon} />
                        <Text accessibilityHint="Perception">
                            PER: {perception}
                        </Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Image source={vitalityIcon} />
                        <Text accessibilityHint="Vitality">
                            VIT: {vitality}
                        </Text>
                    </View>
                    <View>
                        <Image source={intelligenceIcon} />
                        <Text accessibilityHint="Intelligence">
                            INT: {intelligence}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

interface QuestProps {
    level: number;
    job: string;
    title: string;
    strength: number;
    agility: number;
    perception: number;
    vitality: number;
    intelligence: number;
}
