import React from 'react'

const InfoSection = () => {
  return (
    <>
    <InfoContainer id={id}>
        <InfoWrapper>
            <InfoRow>
               <Column1>
               <TextWrapper>
                <Text>
                   <h5>
                   At vero eos et accusamus et iusto odio dignissimos ducimus qui bland
                   itiis praesentium voluptatum deleniti atque corrupti quos dolores et
                    quas molestias excepturi sint occaecati cupiditate non provident, 
                    similique sunt in culpa qui officia deserunt mollitia animi, id est 
                    laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                     distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cu
                     mque nihil impedit quo minus id quod maxime placeat facere possimus, omn
                     is voluptas assumenda est, omnis dolor repellendus. Temporibus autem qui
                     busdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
                      et voluptates repudiandae sint et molestiae non recusandae. Itaque earu
                      m rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
                    alias consequatur aut perferendis doloribus asperiores repellat."
                   </h5>
                </Text>
                <BtnWrap>
                  <Button>Get Started</Button>
                </BtnWrap>
                 
               </TextWrapper>
               </Column1>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection 