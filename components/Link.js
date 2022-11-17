import NextLink from 'next/link';
import { Link as ChakraLink} from '@chakra-ui/react'

export default function Link(props) {
    return (
        <NextLink passHref legacyBehavior {...props}>
            <ChakraLink>{props.children}</ChakraLink>
        </NextLink>
    )
}
