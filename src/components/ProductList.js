import { StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import ProductListItem from './ProductListItem';

export default function ProductList({ products }) {
  const renderItem = ({ item }) => <ProductListItem product={item} />;

  return (
    <FlashList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      estimatedItemSize={175}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 10,
    paddingTop: 30,
  },
});

/*
O componente FlashList do Expo é uma lista otimizada para exibição de grandes quantidades de dados em dispositivos móveis. Ele permite que você renderize rapidamente centenas ou milhares de itens em uma lista, com atualizações de desempenho suaves e sem interrupções na interface do usuário.

Algumas das funcionalidades do FlashList incluem o carregamento dinâmico de itens, suporte a rolagem infinita, renderização personalizada de linhas e células, e animações suaves para deslizar e excluir itens da lista. O FlashList também tem suporte para atualização de dados em tempo real, permitindo que você exiba automaticamente novos itens adicionados à lista.

As vantagens de utilizar o FlashList incluem uma melhor experiência do usuário com uma lista fluida e de alta performance, mesmo em dispositivos mais antigos ou com menos recursos de hardware. Ele também pode ajudar a economizar tempo de desenvolvimento, uma vez que muitas das funcionalidades de lista comuns já são implementadas e otimizadas para você.
*/
