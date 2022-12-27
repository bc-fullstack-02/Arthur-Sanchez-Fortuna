// criação do Heading aula 2 min 1h e 4
import { View, ViewProps, Text } from 'react-native';
import { styles } from './styles';

// criar interface HeadingProps aula 2 min 1h e 5
interface HeadingProps extends ViewProps{
    title: string;
    subtitle: string;
};
                    // escolher oq é mais especifico e dps vem td resto 
export function Heading({title, subtitle,...rest}: HeadingProps) {
  return (
    <View style={styles.container} {...rest}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.subtitle}>{ subtitle }</Text>
    </View>
      );
}