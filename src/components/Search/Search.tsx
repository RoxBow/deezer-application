import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FC, useState } from 'react';
import useSwr from 'swr';

const Search: FC<any> = () => {
  const [term, setTerm] = useState('');
  const { data } = useSwr(term ? `/api/search?term=${term}` : undefined);

  console.log('data', data);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>

      <Input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="On verra"
        variant="flushed"
        size="md"
      />
    </InputGroup>
  );
};

export default Search;
