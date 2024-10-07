// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract MedicineContract {


    struct Medicine {
        uint256 id;
        string name;
        string manufacturer;
        string batchNumber;
        uint256 manufacturingDate;
        uint256 expiryDate;
        string storageConditions;
        address createdBy;
        string alphanumericCode;
        bool fetchedOnce; // New field to track if the data has been fetched
    }

    uint256 public medicineCount;
    mapping(string => uint256) public medicineIdByAlphanumericCode;
    mapping(uint256 => Medicine) public medicines;

    event MedicineAdded(uint256 id, string name, address createdBy, string alphanumericCode);

    function addMedicine(
        string memory _name,
        string memory _manufacturer,
        string memory _batchNumber,
        uint256 _manufacturingDate,
        uint256 _expiryDate,
        string memory _storageConditions
    ) public {
        medicineCount++;
        string memory alphanumericCode = generateRandom6LetterAlphanumericCode();
        medicines[medicineCount] = Medicine(
            medicineCount,
            _name,
            _manufacturer,
            _batchNumber,
            _manufacturingDate,
            _expiryDate,
            _storageConditions,
            msg.sender,
            alphanumericCode,
            false // Initialize fetchedOnce to false
        );
        medicineIdByAlphanumericCode[alphanumericCode] = medicineCount;
        
        emit MedicineAdded(medicineCount, _name, msg.sender, alphanumericCode);
    }

    function getMedicineByAlphanumericCode(string memory alphanumericCode) public returns (
        uint256 id,
        string memory name,
        string memory manufacturer,
        string memory batchNumber,
        uint256 manufacturingDate,
        uint256 expiryDate,
        string memory storageConditions,
        address createdBy
    ) {
        uint256 medicineId = medicineIdByAlphanumericCode[alphanumericCode];
        require(medicineId != 0, "Medicine not found");
        
        Medicine storage medicine = medicines[medicineId];
        
        // Change the batch number to '777' only if it's the second fetch
        if (medicine.fetchedOnce) {
            medicine.batchNumber = '777';
        } else {
            // Mark that the data has been fetched once
            medicine.fetchedOnce = true;
        }

        return (
            medicine.id,
            medicine.name,
            medicine.manufacturer,
            medicine.batchNumber,
            medicine.manufacturingDate,
            medicine.expiryDate,
            medicine.storageConditions,
            medicine.createdBy
        );
    }

    function generateRandom6LetterAlphanumericCode() internal view returns (string memory) {
          uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, blockhash(block.number - 1))));
        string memory alphanumericCode = toAlphanumeric(randomNumber);
        // Ensure the alphanumeric code is 6 characters
        bytes memory alphanumericBytes = bytes(alphanumericCode);
    return string(abi.encodePacked(alphanumericBytes[0], alphanumericBytes[1], alphanumericBytes[2], alphanumericBytes[3], alphanumericBytes[4], alphanumericBytes[5]));
    }

    function toAlphanumeric(uint256 value) internal pure returns (string memory) {
        string memory characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        uint256 base = bytes(characters).length;
        if (value == 0) {
            return "000000";
        }
        uint256 length;
        for (uint256 temp = value; temp > 0; temp /= base) {
            length++;
        }
        bytes memory result = new bytes(length);
        for (uint256 i = length; i > 0; i--) {
            result[i - 1] = bytes(characters)[value % base];
            value /= base;
        }
        return string(result);
    }
    //dsadasdsaasdasd
}
																															