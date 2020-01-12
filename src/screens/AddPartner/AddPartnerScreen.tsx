import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import PartnerModel from '../../models/PartnerModel';
import PartnerCard from '../../components/PartnerCard';

class AddPartnerScreen extends Component { 
    partners: PartnerModel[] = [
        {
            partnerId: 0,
            name: "Bahn",
            logoUri: ""
        },
        {
            partnerId: 1,
            name: "BioCompany",
            logoUri: ""
        },
        {
            partnerId: 2,
            name: "IDK",
            logoUri: ""
        }
    ]
    render() {
        return (
            <ScrollView>
            {this.partners.map((partner: PartnerModel, index: number) => (
                <PartnerCard partner={partner} key={`${index}_${partner.partnerId}`}></PartnerCard>
            ))}
            </ScrollView>
        )
    }
}

export default AddPartnerScreen;